import { IProperty } from "../IProperty";
import { IStream } from "./IStream";

export interface IAudioStream extends IStream {
    getSampleFmt(): IProperty<string> | null;

    getSampleRate(): IProperty<number> | null;

    getChannels(): IProperty<number> | null;

    getChannelLayout(): IProperty<string> | null;

    getBitsPerSample(): IProperty<number> | null;

    hasSampleFmt(): boolean;

    hasSampleRate(): boolean;

    hasChannels(): boolean;

    hasChannelLayout(): boolean;
    
    hasBitsPerSample(): boolean;

    isCodec(codec: string): boolean;
}