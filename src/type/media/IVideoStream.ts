import { IProperty } from "../IProperty";
import { IRatio } from "../IRatio";
import { IStream } from "./IStream";

export interface IVideoStream extends IStream {
    getWidth(): IProperty<number> | null;
    
    getHeight(): IProperty<number> | null;

    getCodedWidth(): IProperty<number> | null;

    getCodedHeight(): IProperty<number> | null;

    getClosedCaptions(): IProperty<string> | null;

    getHasBFrames(): IProperty<number> | null;

    getSampleAspectRatio(): IProperty<IRatio> | null;

    getDisplayAspectTatio(): IProperty<IRatio> | null;

    getPixFmt(): IProperty<string> | null;

    getLevel(): IProperty<number> | null;

    getColorRange(): IProperty<string> | null;

    getColorSpace(): IProperty<string> | null;

    getColorTransfer(): IProperty<string> | null;

    getColorPrimaries(): IProperty<string> | null;

    getChromaLocation(): IProperty<string> | null;

    getRefs(): IProperty<number> | null;

    hasWidth(): boolean;

    hasHeight(): boolean;

    hasCodedWidth(): boolean;

    hasCodedHeight(): boolean;

    hasClosedCaptions(): boolean;

    hasHasBFrames(): boolean;

    hasSampleAspectRatio(): boolean;

    hasDisplayAspectTatio(): boolean;

    hasPixFmt(): boolean;

    hasLevel(): boolean;

    hasColorRange(): boolean;

    hasColorSpace(): boolean;

    hasColorTransfer(): boolean;

    hasColorPrimaries(): boolean;

    hasChromaLocation(): boolean;

    hasRefs(): boolean;

    isCodec(codec: string): boolean;
}