import { exec, execSync } from "child_process";
import _ from "lodash";
import { EnumLogLevel } from "../enumeration/EnumLogLevel";
import { EnumPrintFormat } from "../enumeration/EnumPrintFormat";
import { EnumSelectStream } from "../enumeration/EnumSelectStream";
import { Media } from "../media/Media";
import { OptionFactory } from "../option/OptionFactory";
import { COMMAND_SEPERATOR } from "../type/Constants";
import { IReader } from "../type/execution/IReader";
import { IOption } from "../type/IOption";
import { IMedia } from "../type/media/IMedia";

/**
 * Media file metadata Reader using ffprobe installed in the OS.
 */
export class Reader implements IReader {
    _bin: string;
    _options: IOption<any>[];

    /**
     * Reader constructor.
     * @param bin {string} ffprobe binary path, default is "ffprobe"
     */
    constructor(bin?: string) {
        this._bin = _.isUndefined(bin) ? 'ffprobe' : bin;
        this._options = [OptionFactory.CreateStringOption(
            this._bin,
            "",
            0
        )];
        // auto set "-v panic" and  "-of json=c=1" by default
        this.v();
        this.of();
    }

    getBin(): string {
        return this._bin;
    }

    v(level?: EnumLogLevel): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-v',
            _.isUndefined(level) ? EnumLogLevel.PANIC : level,
            1
        ));
    }

    of(format?: EnumPrintFormat): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-of',
            _.isUndefined(format) ? EnumPrintFormat.JSON : format,
            1
        ));
    }

    show_streams(show?: boolean): IReader {
        return this.#setOption(OptionFactory.CreateBooleanOption(
            '-show_streams',
            _.isUndefined(show) ? true : show,
            1,
            false,
            ['-show_entries']
        ));
    }

    show_format(show?: boolean): IReader {
        return this.#setOption(OptionFactory.CreateBooleanOption(
            '-show_format',
            _.isUndefined(show) ? true : show,
            1,
            false,
            ['-show_entries']
        ));
    }

    show_entries(entries: string): IReader {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-show_entries',
            entries,
            1,
            false,
            ['-show_streams', '-show_format']
        ));
    }

    select_streams(selector: EnumSelectStream): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-select_streams',
            selector,
            1
        ));
    }

    i(input: string): IReader {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-i',
            input,
            2
        ));
    }

    execute(): Promise<IMedia | null> {
        const cmd = this.#buildCommand().join(COMMAND_SEPERATOR);
        return new Promise((resolve, reject) => {
            if (this.checkBin()) {
                exec(cmd, (error, stdout) => {
                    if (!_.isNil(error)) {
                        reject(error)
                    }
                    const metadata = JSON.parse(stdout.toString());
                    resolve(new Media(metadata))
                })
            } else {
                reject(new Error(`ffprobe not found:${this._bin}`));
            }
        });
    }

    executeSync(): IMedia | null {
        const cmd = this.#buildCommand().join(COMMAND_SEPERATOR);
        try {
            if (this.checkBin()) {
                const output = execSync(cmd).toString();
                const metadata = JSON.parse(output);
                return new Media(metadata);
            }
            throw new Error(`ffprobe not found:${this._bin}`);
        } catch (error) {
            return null;
        }
    }

    checkBin(): boolean {
        const check_cmd = `${this._bin} -version`;
        try {
            /* const stdout = */execSync(check_cmd).toString();
            return true;
        } catch (error) {
            return false;
        }
    }

    #setOption(option: IOption<any>): IReader {
        // for no multiple option, remove exists
        !option.isMultiple() && _.remove(this._options, opt => opt.getName() === option.getName());
        // for option with conflicts, remove its conflicts
        !_.isEmpty(option.getConflicts()) && _.remove(this._options, opt => option.getConflicts().includes(opt.getName()));
        this._options.push(option);
        return this;
    }

    #buildCommand(): string[] {
        this._options.sort((o1, o2) => o1.getPriority() - o2.getPriority());
        const args: string[] = [];
        for (const opt of this._options) {
            args.push(...opt.toArray());
        }
        return args;
    }
}