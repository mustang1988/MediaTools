import _ from "lodash";
import { Reader } from "../execution/Reader";
import { IReader } from "../type/execution/IReader";
import { IAudioStream } from "../type/media/IAudioStream";
import { IFormat } from "../type/media/IFormat";
import { IMedia } from "../type/media/IMedia";
import { IObjectSerializable } from "../type/media/IObjectable";
import { IVideoStream } from "../type/media/IVideoStream";
import { AudioStream } from "./AudioStream";
import { Format } from "./Format";
import { VideoStream } from "./VideoStream";

export class Media implements IMedia {
    video_stream: IVideoStream | null;
    audio_stream: IAudioStream | null;
    format: IFormat | null;

    constructor(metadata: JSON) {
        this.video_stream = null;
        this.audio_stream = null;
        this.format = null;
        const streams: JSON[] = _.get(metadata, 'streams');
        for (const stream of streams) {
            const codec_type = _.get(stream, 'codec_type');
            if (codec_type === 'video') {
                this.video_stream = new VideoStream(stream);
            }
            if (codec_type === 'audio') {
                this.audio_stream = new AudioStream(stream);
            }
        }
        const format: JSON = _.get(metadata, 'format');
        this.format = _.isNil(format) ? null : new Format(format);
    }

    hasVideoStream(): boolean {
        return !_.isNil(this.video_stream);
    }

    hasAudioStream(): boolean {
        return !_.isNil(this.audio_stream);
    }

    hasFormat(): boolean {
        return !_.isNil(this.format);
    }

    getVideoStream(): IVideoStream | null {
        return this.video_stream;
    }

    getAudioStream(): IAudioStream | null {
        return this.audio_stream;
    }

    getFormat(): IFormat | null {
        return this.format;
    }

    isHDR(): boolean {
        if (this.hasVideoStream()) {
            const color_space = this.getVideoStream()?.getColorSpace();
            const color_primaries = this.getVideoStream()?.getColorPrimaries();
            const color_transfer = this.getVideoStream()?.getColorTransfer();
            return color_space?.getValue()?.includes('bt2020')
                || color_primaries?.getValue()?.includes('bt2020')
                || color_transfer?.getValue()?.includes('smpte2084')
                || false;
        }
        return false;
    }

    toObject(): object {
        const result = {};
        for (const key of Object.keys(this)) {
            const value: IObjectSerializable = _.get(this, key);
            _.set(
                result,
                key,
                _.isNil(value)
                    ? null
                    : value.toObject()
            );
        }
        return result;
    }
}