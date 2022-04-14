import { IProperty } from "../IProperty";
import { IStream } from "./IStream";

export interface IAudioStream extends IStream {
    /**
     * Get the audio sample format property
     * @return {IProperty<string> | null}
     */
    getSampleFmt(): IProperty<string> | null;

    /**
     * Get the audio sample rate property
     * @return {IProperty<number> | null}
     */
    getSampleRate(): IProperty<number> | null;

    /**
     * Get the audio channel count property
     * @return {IProperty<number> | null}
     */
    getChannels(): IProperty<number> | null;

    /**
     * Get the audio channel layout property
     * @return {IProperty<string> | null}
     */
    getChannelLayout(): IProperty<string> | null;

    /**
     * Get the audio bits per sample property
     * @return {IProperty<number> | null}
     */
    getBitsPerSample(): IProperty<number> | null;

    /**
     * Check whether the audio sample format property is set
     * @return {boolean}
     */
    hasSampleFmt(): boolean;

    /**
     * Check whether the audio sample rate property is set
     * @return {boolean}
     */
    hasSampleRate(): boolean;

    /**
     * Check whether the audio channel count property is set
     * @return {boolean}
     */
    hasChannels(): boolean;

    /**
     * Check whether the audio channel layout property is set
     * @return {boolean}
     */
    hasChannelLayout(): boolean;
    
    /**
     * Check whether the audio bits per sample property is set
     * @return {boolean}
     */
    hasBitsPerSample(): boolean;

    /**
     * Check whether the audio codec is specified one
     * @param codec {string} codec name
     * @return {boolean}
     */
    isCodec(codec: string): boolean;
}