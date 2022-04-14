import { IProperty } from "../IProperty";
import { IRatio } from "../IRatio";
import { IObjectSerializable } from "./IObjectable";

export interface IStream extends IObjectSerializable {
    /**
     * Get the stream index property
     * @return {IProperty<number> | null}
     */
    getIndex(): IProperty<number> | null;
    
    /**
     * Get the codec name property
     * @return {IProperty<number> | null}
     */
    getCodecName(): IProperty<string> | null;

    /**
     * Get the codec long name property
     * @return {IProperty<number> | null}
     */
    getCodecLongName(): IProperty<string> | null;

    /**
     * Get the profile property
     * @return {IProperty<number> | null}
     */
    getProfile(): IProperty<string> | null;

    /**
     * Get the codec tag string property
     * @return {IProperty<number> | null}
     */
    getCodecTagString(): IProperty<string> | null;

    /**
     * Get the codec tag property
     * @return {IProperty<number> | null}
     */
    getCodecTag(): IProperty<string> | null;

    /**
     * Get the r frame rate property
     * @return {IProperty<IRatio> | null}
     */
    getRFrameRate(): IProperty<IRatio> | null;

    /**
     * Get the avg frame rate property
     * @return {IProperty<IRatio> | null}
     */
    getAvgFrameRate(): IProperty<IRatio> | null;

    /**
     * Get the time base property
     * @return {IProperty<IRatio> | null}
     */
    getTimeBase(): IProperty<IRatio> | null;

    /**
     * Get the start pts property
     * @return {IProperty<number> | null}
     */
    getStartPTS(): IProperty<number> | null;

    /**
     * Get the start time property
     * @return {IProperty<number> | null}
     */
    getStartTime(): IProperty<number> | null;

    /**
     * Get the duration ts time property
     * @return {IProperty<number> | null}
     */
    getDurationTS(): IProperty<number> | null;

    /**
     * Get the duration time property
     * @return {IProperty<number> | null}
     */
    getDuration(): IProperty<number> | null;

    /**
     * Get the bit rate property
     * @return {IProperty<number> | null}
     */
    getBitRate(): IProperty<number> | null;

    /**
     * Get the frames count property
     * @return {IProperty<number> | null}
     */
    getNbFrames(): IProperty<number> | null;

    /**
     * Get the disposition property
     * @return {IProperty<object> | null}
     */
    getDisposition(): IProperty<object> | null;

    /**
     * Get the tags property
     * @return {IProperty<object> | null}
     */
    getTags(): IProperty<object> | null;

    /**
     * Whether the index property is set
     * @return {boolean}
     */
    hasIndex(): boolean;

    /**
     * Whether the codec name property is set
     * @return {boolean}
     */
    hasCodecName(): boolean;

    /**
     * Whether the codec long name property is set
     * @return {boolean}
     */
    hasCodecLongName(): boolean;

    /**
     * Whether the profile property is set
     * @return {boolean}
     */
    hasProfile(): boolean;

    /**
     * Whether the codec tag string property is set
     * @return {boolean}
     */
    hasCodecTagString(): boolean;

    /**
     * Whether the codec tag property is set
     * @return {boolean}
     */
    hasCodecTag(): boolean;

    /**
     * Whether the r frame rate property is set
     * @return {boolean}
     */
    hasRFrameRate(): boolean;

    /**
     * Whether the avg frame rate property is set
     * @return {boolean}
     */
    hasAvgFrameRate(): boolean;

    /**
     * Whether the time base property is set
     * @return {boolean}
     */
    hasTimeBase(): boolean;

    /**
     * Whether the start pts property is set
     * @return {boolean}
     */
    hasStartPTS(): boolean;

    /**
     * Whether the start time property is set
     * @return {boolean}
     */
    hasStartTime(): boolean;

    /**
     * Whether the duration ts time property is set
     * @return {boolean}
     */
    hasDurationTS(): boolean;

    /**
     * Whether the duration property is set
     * @return {boolean}
     */
    hasDuration(): boolean;

    /**
     * Whether the bit rate property is set
     * @return {boolean}
     */
    hasBitRate(): boolean;

    /**
     * Whether the frames count property is set
     * @return {boolean}
     */
    hasNbFrames(): boolean;

    /**
     * Whether the disposition property is set
     * @return {boolean}
     */
    hasDisposition(): boolean;

    /**
     * Whether the tags property is set
     * @return {boolean}
     */
    hasTags(): boolean;
}