import { ReaderFactory } from "../execution/ReaderFactory";
import { IMedia } from "../type/media/IMedia";

export class MediaParser {
    static ReadFromFileSync(file: string, bin?: string): IMedia {
        return ReaderFactory.ReadFromFileSync(file, bin);
    }

    static ReadFromFile(file: string, bin?: string): Promise<IMedia> {
        return ReaderFactory.ReadFromFile(file, bin);
    }
}