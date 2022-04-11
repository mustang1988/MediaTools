import { ReaderFactory } from "../execution/ReaderFactory";
import { IMedia } from "../type/media/IMedia";

export class MediaParser {
    /**
     * Read media file metadata sync.
     * @param file {string} input file path
     * @param bin {string} ffprobe binary path
     * @returns {IMedia | null}
     */
    static ReadFromFileSync(file: string, bin?: string): IMedia | null {
        return ReaderFactory.ReadFromFileSync(file, bin);
    }

    /**
     * Read media file metadata async.
     * @param file {string} input file path
     * @param bin {string} ffprobe binary path
     * @returns {Promise<IMedia>}
     */
    static ReadFromFile(file: string, bin?: string): Promise<IMedia> {
        return ReaderFactory.ReadFromFile(file, bin);
    }
}