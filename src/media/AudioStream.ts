import { IProperty } from "../type/IProperty";
import { IAudioStream } from "../type/media/IAudioStream";
import { Stream } from "./Stream";
import { PropertyFactory } from "../property/PropertyFactory";
import _ from "lodash";

export class AudioStream extends Stream implements IAudioStream {
    sample_fmt: IProperty<string> | null;
    sample_rate: IProperty<number> | null;
    channels: IProperty<number> | null;
    channel_layout: IProperty<string> | null;
    bits_per_sample: IProperty<number> | null;

    constructor(metadata: JSON) {
        super(metadata);
        this.sample_fmt = PropertyFactory.CreateStringProperty(_.get(metadata, 'sample_fmt', null));
        this.sample_rate = PropertyFactory.CreateNumberProperty(_.get(metadata, 'sample_rate', null));
        this.channels = PropertyFactory.CreateNumberProperty(_.get(metadata, 'channels', null));
        this.channel_layout = PropertyFactory.CreateStringProperty(_.get(metadata, 'channel_layout', null));
        this.bits_per_sample = PropertyFactory.CreateNumberProperty(_.get(metadata, 'bits_per_sample', null));
    }

    getSampleFmt(): IProperty<string> | null {
        return this.sample_fmt;
    }

    getSampleRate(): IProperty<number> | null {
        return this.sample_rate;
    }

    getChannels(): IProperty<number> | null {
        return this.channels;
    }

    getChannelLayout(): IProperty<string> | null {
        return this.channel_layout;
    }

    getBitsPerSample(): IProperty<number> | null {
        return this.bits_per_sample;
    }

    hasSampleFmt(): boolean {
        return !_.isNil(this.sample_fmt);
    }

    hasSampleRate(): boolean {
        return !_.isNil(this.sample_rate);
    }

    hasChannels(): boolean {
        return !_.isNil(this.channels);
    }

    hasChannelLayout(): boolean {
        return !_.isNil(this.channel_layout);
    }

    hasBitsPerSample(): boolean {
        return !_.isNil(this.bits_per_sample);
    }

    isCodec(codec: string): boolean {
        const codec_name = this.getCodecName();
        const codec_long_name = this.getCodecLongName();
        return codec_name?.getValue().includes(codec) || codec_long_name?.getValue().includes(codec) || false;
    }
}