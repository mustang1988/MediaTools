import { IMedia } from "../type/media/IMedia";
import { Reader } from "./Reader";

export class ReaderFactory {
    /**
     * Read media file metadata sync.
     * @param file {string} input file path
     * @param bin {string} ffprobe binary path
     * @returns {IMedia | null}
     */
    static ReadFromFileSync(file: string, bin?: string): IMedia | null {
        return new Reader(bin)
            .v()
            .of()
            .show_streams()
            .show_format()
            .i(file)
            .executeSync()
    }
    
    /**
     * Read media file metadata async.
     * @param file {string} input file path
     * @param bin {string} ffprobe binary path
     * @returns {Promise<IMedia>}
     */
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