import { IAudioStream } from "./IAudioStream";
import { IFormat } from "./IFormat";
import { IObjectSerializable } from "./IObjectable";
import { IVideoStream } from "./IVideoStream";

export interface IMedia extends IObjectSerializable {
    hasVideoStream(): boolean;

    hasAudioStream(): boolean;

    hasFormat(): boolean;

    getVideoStream(): IVideoStream | null;

    getAudioStream(): IAudioStream | null;

    getFormat(): IFormat | null;
    
    isHDR(): boolean;
}