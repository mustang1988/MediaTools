import { exec, execSync } from "child_process";
import { existsSync } from "fs";
import _ from "lodash";
import { EnumColorspace } from "../enumeration/EnumColorspace";
import { EnumConcatSafe } from "../enumeration/EnumConcatSafe";
import { EnumH26XPreset } from "../enumeration/EnumH26XPreset";
import { EnumH26XProfile } from "../enumeration/EnumH26XProfile";
import { EnumHLSSegmentType } from "../enumeration/EnumHLSSegmentType";
import { EnumVPXDeadline } from "../enumeration/EnumVPXDeadline";
import { EnumVPXQuality } from "../enumeration/EnumVPXQuality";
import { MediaParser } from "../media/MediaParser";
import { OptionFactory } from "../option/OptionFactory";
import { RatioOption } from "../option/RatioOption";
import { ITranscoder } from "../type/execution/ITranscoder";
import { IOption } from "../type/IOption";
import { IMedia } from "../type/media/IMedia";

export class Transcoder implements ITranscoder {
    _bin: string;
    _options: IOption<any>[];
    _source_media?: IMedia;
    _limit_bit_rate: boolean;

    static H26X_OPTION_NAMES = ['-profile:v', '-preset'];
    static VPX_OPTION_NAMES = ['-cpu-used', '-deadline', '-quality', '-frame-parallel', '-level', '-row-mt', '-tile-columns', '-speed'];
    static VIDEO_OPTION_NAMES = [
        ...Transcoder.H26X_OPTION_NAMES,
        ...Transcoder.VPX_OPTION_NAMES,
        '-c:v', '-pix_fmt', '-color_primaries', '-color_range', '-colorspace', '-color_trc', '-g', 'b:v', '-r'
    ];
    static AUDIO_OPTION_NAMES = [
        '-b:a', '-c:a', '-channel_layout', '-ar'
    ];


    constructor(bin?: string) {
        this._bin = _.isUndefined(bin) ? 'ffmpeg' : bin;
        this._options = [
            OptionFactory.CreateStringOption(this._bin, '', 0),
        ];
        this._source_media = undefined;
        this._limit_bit_rate = false;
    }

    getBin(): string {
        return this._bin;
    }

    i(input: string, source?: boolean, format?: string): ITranscoder {
        if (!_.isUndefined(source) && source && !_.isUndefined(format) && !_.isEmpty(format)) {
            this.#setOption(OptionFactory.CreateStringOption('-i', input, 2.1));
            return this.#setOption(OptionFactory.CreateStringOption('-f', format, 2.2, true));
        }
        if (existsSync(input)) {
            this._source_media = MediaParser.ReadFromFileSync(input);
            return this.#setOption(OptionFactory.CreateStringOption('-i', input, 2, true));
        }
        return this;
    }

    b_a(bit_rate: number): ITranscoder {
        this._limit_bit_rate = true;
        return this.#setOption(OptionFactory.CreateNumberOption('-b:a', bit_rate, 5.2));
    }

    c_a(codec: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-c:a', codec, 5));
    }

    channel_layout(layout: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-channel_layout', layout, 5.3));
    }

    an(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-an', confirm, 5.3, false, Transcoder.AUDIO_OPTION_NAMES));
    }

    ar(sample_rate: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ar', sample_rate, 5.1));
    }

    t(time: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ss', time, 1.2));
    }

    ss(start?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ss', _.isUndefined(start) ? 0 : start, 1));
    }

    to(to: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ss', to, 1.1));
    }

    f(format: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-f', format, 9));
    }

    output(output: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('', output, 9.1));
    }

    y(confirm = true): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-threads', confirm, 8));
    }

    threads(threads?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-threads', _.isNil(threads) ? 1 : threads, 8));
    }

    vf(filter: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-vf', filter, 3));
    }

    safe(safe?: EnumConcatSafe): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption('-safe', _.isNil(safe) ? EnumConcatSafe.UNSAFE : safe, 3));
    }

    dn(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-dn', confirm, 6));
    }

    hls_list_size(size?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-hls_list_size', _.isNil(size) ? 0 : size, 7.1));
    }

    hls_segment_filename(filename: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-hls_segment_filename', filename, 7.3));
    }

    hls_segment_type(type?: EnumHLSSegmentType): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption('-hls_segment_type', _.isNil(type) ? EnumHLSSegmentType.MPEGTS : type, 7.2));
    }

    hls_time(time?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-hls_time', _.isNil(time) ? 0 : time, 7));
    }

    sn(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-sn', confirm, 6));
    }

    cpu_used(cpu_used?: number): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateNumberOption('-cpu-used', _.isNil(cpu_used) ? 1 : cpu_used, 4.2));
        }
        return this;
    }

    deadline(deadline?: EnumVPXDeadline): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateEnumOption('-deadline', _.isNil(deadline) ? EnumVPXDeadline.REALTIME : deadline, 4.2));
        }
        return this;
    }

    frame_parallel(enable?: boolean): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateStringOption('-frame-parallel', _.isNil(enable) ? "1" : enable ? "1" : "0", 4.2));
        }
        return this;
    }

    level(level?: number): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateNumberOption('-level', _.isNil(level) ? 6.2 : level, 4.2));
        }
        return this;
    }

    quality(quality?: EnumVPXQuality): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateEnumOption('-quality', _.isNil(quality) ? EnumVPXQuality.REALTIME : quality, 4.2));
        }
        return this;
    }

    row_mt(enable?: boolean): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateStringOption('-row-mt', _.isNil(enable) ? "1" : enable ? "1" : "0", 4.2));
        }
        return this;
    }

    speed(speed?: number): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateNumberOption('-speed', _.isNil(speed) ? 1 : speed, 4.2));
        }
        return this;
    }

    tile_columns(columns?: number): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libvpx-vp9');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateNumberOption('-tile-columns', _.isNil(columns) ? 1 : columns, 4.2));
        }
        return this;
    }

    preset(preset: EnumH26XPreset): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libx264');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateEnumOption('-preset', preset, 4.2));
        }
        return this;
    }

    profile(profile: EnumH26XProfile): ITranscoder {
        const codec_option = _.find(this._options, opt => opt.getName() === '-c:v' && opt.getValue() === 'libx264');
        if (!_.isNil(codec_option)) {
            return this.#setOption(OptionFactory.CreateEnumOption('-profile:v', profile, 4.3));
        }
        return this;
    }

    color_primaries(color_primaries: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-color_primaries', color_primaries, 4.4));
    }

    color_range(color_range: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-color_range', color_range, 4.5));
    }

    colorspace(colorspace: EnumColorspace): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption('-colorspace', colorspace, 4.6));
    }

    color_trc(color_trc: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-color_trc', color_trc, 4.7));
    }

    r(frame_rate: string): ITranscoder {
        const opt = OptionFactory.CreateRatioOption('-r', frame_rate, 4.9)
        if (!_.isNil(opt)) {
            return this.#setOption(opt);
        }
        return this;
    }

    g(gop: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-g', gop, 4.8));
    }

    maxrate(bit_rate: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-maxrate', bit_rate, 4.9));
    }

    minrate(bit_rate: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-minrate', bit_rate, 4.9));
    }

    vn(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-vn', confirm, 4.9, false, Transcoder.VIDEO_OPTION_NAMES));
    }

    pix_fmt(pix_fmt: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-pix_fmt', pix_fmt, 4.1));
    }

    b_V(bit_rate: number): ITranscoder {
        this._limit_bit_rate = true;
        return this.#setOption(OptionFactory.CreateNumberOption('-b:v', bit_rate, 4.9));
    }

    c_v(codec: string): ITranscoder {
        if (codec === 'libx264') {
            // remove vpx options
            _.remove(this._options, opt => Transcoder.VPX_OPTION_NAMES.includes(opt.getName()));
            this.#setOption(OptionFactory.CreateStringOption('-c:v', codec, 4));
            // auto set h26x options
            this.preset(EnumH26XPreset.ULTRAFAST);
            this.profile(EnumH26XProfile.HIGH);
        } else if (codec === 'libvpx-vp9') {
            // remove h26x options
            _.remove(this._options, opt => Transcoder.H26X_OPTION_NAMES.includes(opt.getName()));
            this.#setOption(OptionFactory.CreateStringOption('-c:v', codec, 4));
            // auto set vpx options
            this.cpu_used(8);
            this.deadline(EnumVPXDeadline.REALTIME);
            this.quality(EnumVPXQuality.REALTIME);
            this.frame_parallel(true);
            this.row_mt(true);
            this.speed(8);
            this.tile_columns(6)
            this.level(6.2);
        }
        return this;
    }

    execute(): Promise<string> {
        const command = this.#buildCommand().join(' ');
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout) => {
                if (!_.isNil(error)) {
                    reject(error);
                }
                resolve(stdout.toString())
            })
        });
    }

    executeSync(): string {
        const command = this.#buildCommand().join(' ');
        return execSync(command).toString();
    }

    isBitRateLimit(): boolean {
        return this._limit_bit_rate;
    }

    #setOption(option: IOption<any>): ITranscoder {
        if (!option.isMultiple()) {
            _.remove(this._options, opt => opt.getName() === option.getName());
        }
        if (!_.isEmpty(option.getConflicts())) {
            _.remove(this._options, opt => option.getConflicts().includes(opt.getName()));
        }
        this._options.push(option);
        return this;
    }

    // #setOptions(options: IOption<any>[]): ITranscoder {
    //     for (const option of options) {
    //         this.#setOption(option);
    //     }
    //     return this;
    // }

    #buildCommand(): string[] {
        this.#autoLimitBitRate();
        this._options.sort((o1, o2) => o1.getPriority() - o2.getPriority());
        const args: string[] = [];
        for (const opt of this._options) {
            args.push(...opt.toArray());
        }
        _.remove(args, arg => arg === '');
        return args;
    }

    #autoLimitBitRate(): void {
        if (!this._limit_bit_rate) {
            const audio_bit_limit_opt = OptionFactory.CreateAudioBitRateLimitOption(this._source_media);
            !_.isNil(audio_bit_limit_opt) && this.#setOption(audio_bit_limit_opt);
            const frame_rate_option = <RatioOption>_.find(this._options, opt => opt.getName() === '-r');
            const video_bit_limit_opt = OptionFactory.CreateVideoBitRateLimitOption(this._source_media, frame_rate_option);
            !_.isNil(video_bit_limit_opt) && this.#setOption(video_bit_limit_opt);
        }
    }
}