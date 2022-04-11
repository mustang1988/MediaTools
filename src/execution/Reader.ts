import { exec, execSync } from "child_process";
import _ from "lodash";
import { isConstructorTypeNode } from "typescript";
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

    /**
     * Get executable ffprobe file path.
     * @returns {string} Executable ffprobe binary path
     */
    getBin(): string {
        return this._bin;
    }

    /**
     * Set ffprobe print log level.
     * @param level {EnumLogLevel|undefined} ffprobe print log level, default is EnumLogLevel.PANIC
     * @returns {IReader}
     */
    v(level?: EnumLogLevel): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-v',
            _.isUndefined(level) ? EnumLogLevel.PANIC : level,
            1
        ));
    }

    /**
     * Set ffprobe print format.
     * @param format {EnumPrintFormat|undefined} ffprobe print format, default is EnumPrintFormat.JSON
     * @returns {IReader}
     */
    of(format?: EnumPrintFormat): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-of',
            _.isUndefined(format) ? EnumPrintFormat.JSON : format,
            1
        ));
    }

    /**
     * Set show streams option in ffprobe.
     * It's conflict with show_entries option.
     * @param show {boolean} do show streams in ffprobe
     * @returns {IReader}
     */
    show_streams(show?: boolean): IReader {
        return this.#setOption(OptionFactory.CreateBooleanOption(
            '-show_streams',
            _.isUndefined(show) ? true : show,
            1,
            false,
            ['-show_entries']
        ));
    }

    /**
     * Set show format option in ffprobe.
     * It's conflict with show_entries option.
     * @param show {boolean} do show format in ffprobe
     * @returns {IReader}
     */
    show_format(show?: boolean): IReader {
        return this.#setOption(OptionFactory.CreateBooleanOption(
            '-show_format',
            _.isUndefined(show) ? true : show,
            1,
            false,
            ['-show_entries']
        ));
    }

    /**
     * Set show entries option in ffprobe.
     * It's conflict with show_streams and show_format options.
     * @param entries {string} show entries
     * @link https://ffmpeg.org/ffprobe.html#show-entries
     * @returns {IReader}
     */
    show_entries(entries: string): IReader {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-show_entries',
            entries,
            1,
            false,
            ['-show_streams', '-show_format']
        ));
    }

    /**
     * Set select stream option in ffprobe.
     * @param selector {EnumSelectStream} stream selector
     * @returns {IReader}
     */
    select_streams(selector: EnumSelectStream): IReader {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-select_streams',
            selector,
            1
        ));
    }

    /**
     * Set input file path for ffprobe.
     * @param input {string} input file path
     * @returns {IReader}
     */
    i(input: string): IReader {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-i',
            input,
            2
        ));
    }

    /**
     * Execute ffprobe command async.
     * @returns {Promise<IMedia>}
     */
    execute(): Promise<IMedia> {
        const cmd = this.#buildCommand().join(COMMAND_SEPERATOR);
        return new Promise((resolve, reject) => {
            // console.log('In Promise =>> ', this.checkBin());
            if (this.checkBin()) {
                // console.log(cmd);
                exec(cmd, (error, stdout) => {
                    // console.error('In Callback =>> ', error);
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

    /**
     * Execute ffprobe command sync.
     * @returns {IMedia | null}
     */
    executeSync(): IMedia | null {
        const cmd = this.#buildCommand().join(COMMAND_SEPERATOR);
        try {
            if (this.checkBin()) {
                // console.log(cmd);
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
            const check_res = execSync(check_cmd);
            // console.log(check_res.toString());
            return true;
        } catch (error) {
            console.log(error);
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