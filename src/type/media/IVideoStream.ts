import { IProperty } from "../IProperty";
import { IRatio } from "../IRatio";
import { IStream } from "./IStream";

export interface IVideoStream extends IStream {
    /**
     * Get the video width property
     * @return {IProperty<number> | null}
     */
    getWidth(): IProperty<number> | null;

    /**
     * Get the video height property
     * @return {IProperty<number> | null}
     */
    getHeight(): IProperty<number> | null;

    /**
     * Get the video coded width property
     * @return {IProperty<number> | null}
     */
    getCodedWidth(): IProperty<number> | null;

    /**
     * Get the video coded height property
     * @return {IProperty<number> | null}
     */
    getCodedHeight(): IProperty<number> | null;

    /**
     * Get the video closed captions property
     * @return {IProperty<number> | null}
     */
    getClosedCaptions(): IProperty<string> | null;

    /**
     * Get the video has b frames property
     * @return {IProperty<boolean> | null}
     */
    getHasBFrames(): IProperty<number> | null;

    /**
     * Get the video sample aspect ratio property
     * @return {IProperty<IRatio> | null}
     */
    getSampleAspectRatio(): IProperty<IRatio> | null;

    /**
     * Get the video display aspect ratio property
     * @return {IProperty<IRatio> | null}
     */
    getDisplayAspectTatio(): IProperty<IRatio> | null;

    /**
     * Get the video pixel format property
     * @return {IProperty<string> | null}
     */
    getPixFmt(): IProperty<string> | null;

    /**
     * Get the video level property
     * @return {IProperty<number> | null}
     */
    getLevel(): IProperty<number> | null;

    /**
     * Get the video color range property
     * @return {IProperty<string> | null}
     */
    getColorRange(): IProperty<string> | null;

    /**
     * Get the video color space property
     * @return {IProperty<string> | null}
     */
    getColorSpace(): IProperty<string> | null;

    /**
     * Get the video color transfer property
     * @return {IProperty<string> | null}
     */
    getColorTransfer(): IProperty<string> | null;

    /**
     * Get the video color primaries property
     * @return {IProperty<string> | null}
     */
    getColorPrimaries(): IProperty<string> | null;

    /**
     * Get the video chroma location property
     * @return {IProperty<string> | null}
     */
    getChromaLocation(): IProperty<string> | null;

    /**
     * Get the video refs property
     * @return {IProperty<number> | null}
     */
    getRefs(): IProperty<number> | null;

    /**
     * Whether the video width property is set
     * @return {boolean}
     */
    hasWidth(): boolean;

    /**
     * Whether the video height property is set
     * @return {boolean}
     */
    hasHeight(): boolean;

    /**
     * Whether the video coded width property is set
     * @return {boolean}
     */
    hasCodedWidth(): boolean;

    /**
     * Whether the video coded height property is set
     * @return {boolean}
     */
    hasCodedHeight(): boolean;

    /**
     * Whether the video closed captions property is set
     * @return {boolean}
     */
    hasClosedCaptions(): boolean;

    /**
     * Whether the video has b frames property is set
     * @return {boolean}
     */
    hasHasBFrames(): boolean;

    /**
     * Whether the video sample aspect ratio property is set
     * @return {boolean}
     */
    hasSampleAspectRatio(): boolean;

    /**
     * Whether the video display aspect ratio property is set
     * @return {boolean}
     */
    hasDisplayAspectTatio(): boolean;

    /**
     * Whether the video pixel format property is set
     * @return {boolean}
     */
    hasPixFmt(): boolean;

    /**
     * Whether the video level property is set
     * @return {boolean}
     */
    hasLevel(): boolean;

    /**
     * Whether the video color range property is set
     * @return {boolean}
     */
    hasColorRange(): boolean;

    /**
     * Whether the video color space property is set
     * @return {boolean}
     */
    hasColorSpace(): boolean;

    /**
     * Whether the video color transfer property is set
     * @return {boolean}
     */
    hasColorTransfer(): boolean;

    /**
     * Whether the video color primaries property is set
     * @return {boolean}
     */
    hasColorPrimaries(): boolean;

    /**
     * Whether the video chroma location property is set
     * @return {boolean}
     */
    hasChromaLocation(): boolean;

    /**
     * Whether the video refs property is set
     * @return {boolean}
     */
    hasRefs(): boolean;

    /**
     * Check whether the video codec is specified one
     * @param codec {string} codec name
     * @return {boolean}
     */
    isCodec(codec: string): boolean;
}