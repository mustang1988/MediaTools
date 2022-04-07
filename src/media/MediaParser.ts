import { Reader } from "../execution/Reader";
import { IReader } from "../type/execution/IReader";
import { IMedia } from "../type/media/IMedia";

export class MediaParser {
    static ReadFromFileSync(file: string): IMedia {
        const reader: IReader = new Reader();
        return reader.v().of().show_streams().show_format().i(file).executeSync();
    }

    static ReadFromFile(file: string): Promise<IMedia> {
        const reader: IReader = new Reader();
        return reader.v().of().show_streams().show_format().i(file).execute();
    }
}