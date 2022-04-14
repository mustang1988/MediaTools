import _ from "lodash";
import { PropertyFactory } from "../property/PropertyFactory";
import { IProperty } from "../type/IProperty";
import { IRatio } from "../type/IRatio";
import { IVideoStream } from "../type/media/IVideoStream";
import { Stream } from "./Stream";

export class VideoStream extends Stream implements IVideoStream {
    width: IProperty<number> | null;
    height: IProperty<number> | null;
    coded_width: IProperty<number> | null;
    coded_height: IProperty<number> | null;
    closed_captions: IProperty<string> | null;
    has_b_frames: IProperty<number> | null;
    sample_aspect_ratio: IProperty<IRatio> | null;
    display_aspect_ratio: IProperty<IRatio> | null;
    pix_fmt: IProperty<string> | null;
    level: IProperty<number> | null;
    color_range: IProperty<string> | null;
    color_space: IProperty<string> | null;
    color_transfer: IProperty<string> | null;
    color_primaries: IProperty<string> | null;
    chroma_location: IProperty<string> | null;
    refs: IProperty<number> | null;

    constructor(metadata: JSON) {
        super(metadata);
        this.width = PropertyFactory.CreateNumberProperty(_.get(metadata, 'width', null));
        this.height = PropertyFactory.CreateNumberProperty(_.get(metadata, 'height', null));
        this.coded_width = PropertyFactory.CreateNumberProperty(_.get(metadata, 'coded_width', null));
        this.coded_height = PropertyFactory.CreateNumberProperty(_.get(metadata, 'coded_height', null));
        this.closed_captions = PropertyFactory.CreateStringProperty(_.get(metadata, 'closed_captions', null));
        this.has_b_frames = PropertyFactory.CreateNumberProperty(_.get(metadata, 'has_b_frames', null));
        this.sample_aspect_ratio = PropertyFactory.CreateRatioProperty(_.get(metadata, 'sample_aspect_ratio', null));
        this.display_aspect_ratio = PropertyFactory.CreateRatioProperty(_.get(metadata, 'display_aspect_ratio', null));
        this.pix_fmt = PropertyFactory.CreateStringProperty(_.get(metadata, 'pix_fmt', null));
        this.level = PropertyFactory.CreateNumberProperty(_.get(metadata, 'level', null));
        this.color_range = PropertyFactory.CreateStringProperty(_.get(metadata, 'color_range', null));
        this.color_space = PropertyFactory.CreateStringProperty(_.get(metadata, 'color_space', null));
        this.color_transfer = PropertyFactory.CreateStringProperty(_.get(metadata, 'color_transfer', null));
        this.color_primaries = PropertyFactory.CreateStringProperty(_.get(metadata, 'color_primaries', null));
        this.chroma_location = PropertyFactory.CreateStringProperty(_.get(metadata, 'chroma_location', null));
        this.refs = PropertyFactory.CreateNumberProperty(_.get(metadata, 'refs', null));
    }

    getWidth(): IProperty<number> | null {
        return this.width;
    }

    getHeight(): IProperty<number> | null {
        return this.height;
    }

    getCodedWidth(): IProperty<number> | null {
        return this.coded_width;
    }

    getCodedHeight(): IProperty<number> | null {
        return this.coded_height;
    }

    getClosedCaptions(): IProperty<string> | null {
        return this.closed_captions;
    }

    getHasBFrames(): IProperty<number> | null {
        return this.has_b_frames;
    }

    getSampleAspectRatio(): IProperty<IRatio> | null {
        return this.sample_aspect_ratio;
    }

    getDisplayAspectTatio(): IProperty<IRatio> | null {
        return this.display_aspect_ratio;
    }

    getPixFmt(): IProperty<string> | null {
        return this.pix_fmt;
    }

    getLevel(): IProperty<number> | null {
        return this.level;
    }

    getColorRange(): IProperty<string> | null {
        return this.color_range;
    }

    getColorSpace(): IProperty<string> | null {
        return this.color_space;
    }
    getColorTransfer(): IProperty<string> | null {
        return this.color_transfer;
    }

    getColorPrimaries(): IProperty<string> | null {
        return this.color_primaries;
    }

    getChromaLocation(): IProperty<string> | null {
        return this.chroma_location;
    }

    getRefs(): IProperty<number> | null {
        return this.refs;
    }

    hasWidth(): boolean {
        return !_.isNil(this.width);
    }

    hasHeight(): boolean {
        return !_.isNil(this.height);
    }

    hasCodedWidth(): boolean {
        return !_.isNil(this.coded_width);
    }

    hasCodedHeight(): boolean {
        return !_.isNil(this.coded_height);
    }

    hasClosedCaptions(): boolean {
        return !_.isNil(this.closed_captions);
    }

    hasHasBFrames(): boolean {
        return !_.isNil(this.has_b_frames);
    }

    hasSampleAspectRatio(): boolean {
        return !_.isNil(this.sample_aspect_ratio);
    }

    hasDisplayAspectTatio(): boolean {
        return !_.isNil(this.display_aspect_ratio);
    }

    hasPixFmt(): boolean {
        return !_.isNil(this.pix_fmt);
    }

    hasLevel(): boolean {
        return !_.isNil(this.level);
    }

    hasColorRange(): boolean {
        return !_.isNil(this.color_range);
    }

    hasColorSpace(): boolean {
        return !_.isNil(this.color_space);
    }

    hasColorTransfer(): boolean {
        return !_.isNil(this.color_transfer);
    }

    hasColorPrimaries(): boolean {
        return !_.isNil(this.color_primaries);
    }

    hasChromaLocation(): boolean {
        return !_.isNil(this.chroma_location);
    }

    hasRefs(): boolean {
        return !_.isNil(this.refs);
    }

    isCodec(codec: string): boolean {
        const codec_name = this.getCodecName();
        const codec_long_name = this.getCodecLongName();
        return codec_name?.getValue().includes(this.#transformTargetCodecName(codec))
            || codec_long_name?.getValue().includes(this.#transformTargetCodecName(codec))
            || false;
    }

    #transformTargetCodecName(codec: string): string {
        switch (codec) {
            case 'libx264':
                return 'h264';
            case 'libx265':
                return 'hevc';
            case 'libvpx-vp9':
                return 'vp9'
            default:
                return codec
        }
    }
}