import _ from "lodash";
import { NumberProperty } from "../property/NumberProperty";
import { ObjectProperty } from "../property/ObjectProperty";
import { PropertyFactory } from "../property/PropertyFactory";
import { RatioProperty } from "../property/RatioProperty";
import { StringProperty } from "../property/StringProperty";
import { IProperty } from "../type/IProperty";
import { IStream } from "../type/media/IStream";

export class Stream implements IStream {
    index: NumberProperty | null;
    codec_name: StringProperty | null;
    codec_long_name: StringProperty | null;
    profile: StringProperty | null;
    codec_tag_string: StringProperty | null;
    codec_tag: StringProperty | null;
    r_frame_rate: RatioProperty | null;
    avg_frame_rate: RatioProperty | null;
    time_base: RatioProperty | null;
    start_pts: NumberProperty | null;
    start_time: NumberProperty | null;
    duration_ts: NumberProperty | null;
    duration: NumberProperty | null;
    bit_rate: NumberProperty | null;
    nb_frames: NumberProperty | null;
    disposition: ObjectProperty | null;
    tags: ObjectProperty | null;

    constructor(metadata: JSON) {
        this.index = PropertyFactory.CreateNumberProperty(_.get(metadata, 'index', null));
        this.codec_name = PropertyFactory.CreateStringProperty(_.get(metadata, 'codec_name', null));
        this.codec_long_name = PropertyFactory.CreateStringProperty(_.get(metadata, 'codec_long_name', null));
        this.profile = PropertyFactory.CreateStringProperty(_.get(metadata, 'profile', null));
        this.codec_tag_string = PropertyFactory.CreateStringProperty(_.get(metadata, 'codec_tag_string', null));
        this.codec_tag = PropertyFactory.CreateStringProperty(_.get(metadata, 'codec_tag', null));
        this.r_frame_rate = PropertyFactory.CreateRatioProperty(_.get(metadata, 'r_frame_rate', null));
        this.avg_frame_rate = PropertyFactory.CreateRatioProperty(_.get(metadata, 'avg_frame_rate', null));
        this.time_base = PropertyFactory.CreateRatioProperty(_.get(metadata, 'time_base', null));
        this.start_pts = PropertyFactory.CreateNumberProperty(_.get(metadata, 'start_pts', null));
        this.start_time = PropertyFactory.CreateNumberProperty(_.get(metadata, 'start_time', null));
        this.duration_ts = PropertyFactory.CreateNumberProperty(_.get(metadata, 'duration_ts', null));
        this.duration = PropertyFactory.CreateNumberProperty(_.get(metadata, 'duration', null));
        this.bit_rate = PropertyFactory.CreateNumberProperty(_.get(metadata, 'bit_rate', null));
        this.nb_frames = PropertyFactory.CreateNumberProperty(_.get(metadata, 'nb_frames', null));
        this.disposition = PropertyFactory.CreateObjectProperty(_.get(metadata, 'disposition', null));
        this.tags = PropertyFactory.CreateObjectProperty(_.get(metadata, 'tags', null));
    }

    getIndex(): NumberProperty | null {
        return this.index;
    }
    
    getCodecName(): StringProperty | null {
        return this.codec_name;
    }

    getCodecLongName(): StringProperty | null {
        return this.codec_long_name;
    }

    getProfile(): StringProperty | null {
        return this.profile;
    }

    getCodecTagString(): StringProperty | null {
        return this.codec_tag_string;
    }

    getCodecTag(): StringProperty | null {
        return this.codec_tag;
    }

    getRFrameRate(): RatioProperty | null {
        return this.r_frame_rate;
    }

    getAvgFrameRate(): RatioProperty | null {
        return this.avg_frame_rate;
    }

    getTimeBase(): RatioProperty | null {
        return this.time_base;
    }

    getStartPTS(): NumberProperty | null {
        return this.start_pts;
    }

    getStartTime(): NumberProperty | null {
        return this.start_time;
    }

    getDurationTS(): NumberProperty | null {
        return this.duration_ts;
    }

    getDuration(): NumberProperty | null {
        return this.duration;
    }

    getBitRate(): NumberProperty | null {
        return this.bit_rate;
    }

    getNbFrames(): NumberProperty | null {
        return this.nb_frames;
    }

    getDisposition(): ObjectProperty | null {
        return this.disposition;
    }

    getTags(): ObjectProperty | null {
        return this.tags;
    }

    hasIndex(): boolean {
        return !_.isNil(this.index);
    }

    hasCodecName(): boolean {
        return !_.isNil(this.codec_name);
    }

    hasCodecLongName(): boolean {
        return !_.isNil(this.codec_long_name);
    }

    hasProfile(): boolean {
        return !_.isNil(this.profile);
    }

    hasCodecTagString(): boolean {
        return !_.isNil(this.codec_tag_string);
    }

    hasCodecTag(): boolean {
        return !_.isNil(this.codec_tag);
    }

    hasRFrameRate(): boolean {
        return !_.isNil(this.r_frame_rate);
    }

    hasAvgFrameRate(): boolean {
        return !_.isNil(this.avg_frame_rate);
    }

    hasTimeBase(): boolean {
        return !_.isNil(this.time_base);
    }

    hasStartPTS(): boolean {
        return !_.isNil(this.start_pts);
    }

    hasStartTime(): boolean {
        return !_.isNil(this.start_time);
    }

    hasDurationTS(): boolean {
        return !_.isNil(this.duration_ts);
    }

    hasDuration(): boolean {
        return !_.isNil(this.duration);
    }

    hasBitRate(): boolean {
        return !_.isNil(this.bit_rate);
    }

    hasNbFrames(): boolean {
        return !_.isNil(this.nb_frames);
    }

    hasDisposition(): boolean {
        return !_.isNil(this.disposition);
    }

    hasTags(): boolean {
        return !_.isNil(this.tags);
    }

    toObject(): object {
        const result = {};
        for (const key of Object.keys(this)) {
            const value: IProperty<any> = _.get(this, key);
            _.set(
                result,
                key,
                _.isNil(value)
                    ? null
                    : value.isRatio()
                        ? value.getValue().toString()
                        : value.getValue()
            );
        }
        return result;
    }
}