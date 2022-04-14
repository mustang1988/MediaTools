import { EnumLogLevel } from "../../enumeration/EnumLogLevel";
import { EnumPrintFormat } from '../../enumeration/EnumPrintFormat';
import { EnumSelectStream } from "../../enumeration/EnumSelectStream";
import { IMedia } from "../media/IMedia";
import { IExecutable } from "./IExecutable";

export interface IReader extends IExecutable<IMedia> {
    /**
     * Set ffprobe print log level.
     * @param level {EnumLogLevel|undefined} ffprobe print log level, default is EnumLogLevel.PANIC
     * @returns {IReader}
     */
    v(level?: EnumLogLevel): IReader;

    /**
     * Set ffprobe print format.
     * @param format {EnumPrintFormat|undefined} ffprobe print format, default is EnumPrintFormat.JSON
     * @returns {IReader}
     */
    of(format?: EnumPrintFormat): IReader;

    /**
     * Set show streams option in ffprobe.
     * It's conflict with show_entries option.
     * @param show {boolean} do show streams in ffprobe
     * @returns {IReader}
     */
    show_streams(show?: boolean): IReader;

    /**
     * Set show format option in ffprobe.
     * It's conflict with show_entries option.
     * @param show {boolean} do show format in ffprobe
     * @returns {IReader}
     */
    show_format(show?: boolean): IReader;

    /**
     * Set show entries option in ffprobe.
     * It's conflict with show_streams and show_format options.
     * @param entries {string} show entries
     * @link https://ffmpeg.org/ffprobe.html#show-entries
     * @returns {IReader}
     */
    show_entries(entries: string): IReader;

    /**
     * Set select stream option in ffprobe.
     * @param selector {EnumSelectStream} stream selector
     * @returns {IReader}
     */
    select_streams(selector: EnumSelectStream): IReader;

    /**
     * Set input file path for ffprobe.
     * @param input {string} input file path
     * @returns {IReader}
     */
    i(input: string): IReader;
}