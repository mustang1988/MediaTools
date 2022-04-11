import { EnumLogLevel } from "../../enumeration/EnumLogLevel";
import { EnumPrintFormat } from '../../enumeration/EnumPrintFormat';
import { EnumSelectStream } from "../../enumeration/EnumSelectStream";
import { IMedia } from "../media/IMedia";
import { IExecutable } from "./IExecutable";

export interface IReader extends IExecutable<IMedia>{
    getBin(): string;

    v(level?: EnumLogLevel): IReader;

    of(format?: EnumPrintFormat): IReader;

    show_streams(show?: boolean): IReader;

    show_format(show?: boolean): IReader;

    show_entries(entries: string): IReader;

    select_streams(selector: EnumSelectStream): IReader;

    i(input: string): IReader;

    execute(): Promise<IMedia>;

    executeSync(): IMedia | null;
}