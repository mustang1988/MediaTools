import { EnumLogLevel } from "../../enumeration/EnumLogLevel";
import { EnumPrintFormat } from '../../enumeration/EnumPrintFormat';
import { EnumSelectStream } from "../../enumeration/EnumSelectStream";
import { IMedia } from "../media/IMedia";

export interface IReader {
    getBin(): string;

    v(level?: EnumLogLevel): IReader;

    of(format?: EnumPrintFormat): IReader;

    show_streams(show?: boolean): IReader;

    show_format(show?: boolean): IReader;

    show_entries(entries: string): IReader;

    select_streams(selector: EnumSelectStream): IReader;

    i(input: string): IReader;

    execute(): Promise<IMedia>;
    
    executeSync(): IMedia;
}