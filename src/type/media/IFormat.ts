import { IProperty } from "../IProperty";
import { IObjectSerializable } from "./IObjectable";

export interface IFormat extends IObjectSerializable {
    /**
     * Get filename property
     * @return {IProperty<string> | null}
     */
    getFilename(): IProperty<string> | null;

    /**
     * Get stream count property
     * @return {IProperty<number> | null}
     */
    getNBStreams(): IProperty<number> | null;

    /**
     * Get program count property
     * @return {IProperty<number> | null}
     */
    getNBPrograms(): IProperty<number> | null;

    /**
     * Get format name property
     * @return {IProperty<string> | null}
     */
    getFormatName(): IProperty<string> | null;

    /**
     * Get format long name property
     * @return {IProperty<string> | null}
     */
    getFormatLongName(): IProperty<string> | null;

    /**
     * Get start time property
     * @return {IProperty<number> | null}
     */
    getStartTime(): IProperty<number> | null;

    /**
     * Get duration property
     * @return {IProperty<number> | null}
     */
    getDuration(): IProperty<number> | null;

    /**
     * Get size property
     * @return {IProperty<number> | null}
     */
    getSize(): IProperty<number> | null;

    /**
     * Get bit rate property
     * @return {IProperty<number> | null}
     */
    getBitRate(): IProperty<number> | null;

    /**
     * Get probe score property
     * @return {IProperty<number> | null}
     */
    getProbeScore(): IProperty<number> | null;

    /**
     * Get tags property
     * @return {IProperty<object> | null}
     */
    getTags(): IProperty<object> | null;

    /**
     * Check whether filename property is set
     * @return {boolean}
     */
    hasFilename(): boolean;

    /**
     * Check whether stream count property is set
     * @return {boolean}
     */
    hasNBStreams(): boolean;

    /**
     * Check whether program count property is set
     * @return {boolean}
     */
    hasNBPrograms(): boolean;

    /**
     * Check whether format name property is set
     * @return {boolean}
     */
    hasFormatName(): boolean;

    /**
     * Check whether format long name property is set
     * @return {boolean}
     */
    hasFormatLongName(): boolean;

    /**
     * Check whether start time property is set
     * @return {boolean}
     */
    hasStartTime(): boolean;

    /**
     * Check whether duration property is set
     * @return {boolean}
     */
    hasDuration(): boolean;

    /**
     * Check whether size property is set
     * @return {boolean}
     */
    hasSize(): boolean;

    /**
     * Check whether bit rate property is set   
     * @return {boolean}
     */
    hasBitRate(): boolean;

    /**
     * Check whether probe score property is set
     * @return {boolean}
     */
    hasProbeScore(): boolean;

    /**
     * Check whether tags property is set
     * @return {boolean}
     */
    hasTags(): boolean;
}