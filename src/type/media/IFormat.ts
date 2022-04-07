import { IProperty } from "../IProperty";
import { IObjectSerializable } from "./IObjectable";

export interface IFormat extends IObjectSerializable {
    getFilename(): IProperty<string> | null;

    getNBStreams(): IProperty<number> | null;

    getNBPrograms(): IProperty<number> | null;

    getFormatName(): IProperty<string> | null;

    getFormatLongName(): IProperty<string> | null;

    getStartTime(): IProperty<number> | null;

    getDuration(): IProperty<number> | null;

    getSize(): IProperty<number> | null;

    getBitRate(): IProperty<number> | null;

    getProbeScore(): IProperty<number> | null;

    getTags(): IProperty<object> | null;

    hasFilename(): boolean;

    hasNBStreams(): boolean;

    hasNBPrograms(): boolean;

    hasFormatName(): boolean;
    
    hasFormatLongName(): boolean;

    hasStartTime(): boolean;

    hasDuration(): boolean;

    hasSize(): boolean;

    hasBitRate(): boolean;

    hasProbeScore(): boolean;

    hasTags(): boolean;
}