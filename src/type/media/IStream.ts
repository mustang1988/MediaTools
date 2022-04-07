import { IProperty } from "../IProperty";
import { IRatio } from "../IRatio";
import { IObjectSerializable } from "./IObjectable";

export interface IStream extends IObjectSerializable {
    getIndex(): IProperty<number> | null;
    
    getCodecName(): IProperty<string> | null;

    getCodecLongName(): IProperty<string> | null;

    getProfile(): IProperty<string> | null;

    getCodecTagString(): IProperty<string> | null;

    getCodecTag(): IProperty<string> | null;

    getRFrameRate(): IProperty<IRatio> | null;

    getAvgFrameRate(): IProperty<IRatio> | null;

    getTimeBase(): IProperty<IRatio> | null;

    getStartPTS(): IProperty<number> | null;

    getStartTime(): IProperty<number> | null;

    getDurationTS(): IProperty<number> | null;

    getDuration(): IProperty<number> | null;

    getBitRate(): IProperty<number> | null;

    getNbFrames(): IProperty<number> | null;

    getDisposition(): IProperty<object> | null;

    getTags(): IProperty<object> | null;

    hasIndex(): boolean;

    hasCodecName(): boolean;

    hasCodecLongName(): boolean;

    hasProfile(): boolean;

    hasCodecTagString(): boolean;

    hasCodecTag(): boolean;

    hasRFrameRate(): boolean;

    hasAvgFrameRate(): boolean;

    hasTimeBase(): boolean;

    hasStartPTS(): boolean;

    hasStartTime(): boolean;

    hasDurationTS(): boolean;

    hasDuration(): boolean;

    hasBitRate(): boolean;

    hasNbFrames(): boolean;

    hasDisposition(): boolean;

    hasTags(): boolean;
}