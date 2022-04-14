import { IAudioStream } from "./IAudioStream";
import { IFormat } from "./IFormat";
import { IObjectSerializable } from "./IObjectable";
import { IVideoStream } from "./IVideoStream";

export interface IMedia extends IObjectSerializable {
    /**
     * Whether the video stream is set
     * @return {boolean}
     */
    hasVideoStream(): boolean;

    /**
     * Whether the audio stream is set
     * @return {boolean}
     */
    hasAudioStream(): boolean;

    /**
     * Whether the format info is set
     * @return {boolean}
     */
    hasFormat(): boolean;

    /**
     * Get the video stream
     * @return {IVideoStream | null}
     */
    getVideoStream(): IVideoStream | null;

    /**
     * Get the audio stream
     * @return {IAudioStream | null}
     */
    getAudioStream(): IAudioStream | null;

    /**
     * Get the format info
     * @return {IFormat | null}
     */
    getFormat(): IFormat | null;
    
    /**
     * Whether the video stream support HDR
     */
    isHDR(): boolean;
}