import { IMedia } from "../type/media/IMedia";
import { Reader } from "./Reader";

export class ReaderFactory {
    static ReadFromFileSync(file: string, bin?: string): IMedia | null {
        return new Reader(bin)
            .v()
            .of()
            .show_streams()
            .show_format()
            .i(file)
            .executeSync()
    }
    static ReadFromFile(file: string, bin?: string): Promise<IMedia> {
        return new Reader(bin)
            .v()
            .of()
            .show_streams()
            .show_format()
            .i(file)
            .execute()
    }
}