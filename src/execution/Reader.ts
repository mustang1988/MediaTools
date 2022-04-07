import { exec, execSync } from "child_process";
import _ from "lodash";
import { EnumLogLevel } from "../enumeration/EnumLogLevel";
import { EnumPrintFormat } from "../enumeration/EnumPrintFormat";
import { EnumSelectStream } from "../enumeration/EnumSelectStream";
import { Media } from "../media/Media";
import { OptionFactory } from "../option/OptionFactory";
import { IReader } from "../type/execution/IReader";
import { IOption } from "../type/IOption";
import { IMedia } from "../type/media/IMedia";

export class Reader implements IReader {
    _bin: string;
    _options: IOption<any>[];

    constructor(bin?: string) {
        this._bin = _.isUndefined(bin) ? 'ffprobe' : bin;
        this._options = [OptionFactory.CreateStringOption(
            this._bin,
            '',
            0
        )];
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
            '-show_entries',
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

    execute(): Promise<IMedia> {
        const cmd = this.#buildCommand().join(' ');
        return new Promise((resolve, reject) => {
            try {
                exec(cmd, (error, stdout, stderr) => {
                    const metadata = JSON.parse(stdout.toString());
                    resolve(new Media(metadata))
                })
            } catch (error) {
                reject(error)
            }
        });
    }

    executeSync(): IMedia {
        const cmd = this.#buildCommand().join(' ');
        console.log('cmd =>> ', cmd);
        const output = execSync(cmd).toString();
        const metadata = JSON.parse(output);
        return new Media(metadata);
    }

    #setOption(option: IOption<any>): IReader {
        if (!option.isMultiple()) {
            _.remove(this._options, opt => opt.getName() === option.getName());
        }
        if (!_.isEmpty(option.getConflicts())) {
            _.remove(this._options, opt => option.getConflicts().includes(opt.getName()));
        }
        this._options.push(option);
        return this;
    }
    
    #buildCommand(): string[] {
        this._options.sort((o1, o2) => o1.getPriority() - o2.getPriority());
        let args: string[] = [];
        for (const opt of this._options) {
            args.push(...opt.toArray());
        }
        return args;
    }
}