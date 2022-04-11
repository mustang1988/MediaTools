import { exec, execSync } from "child_process";
import { existsSync } from "fs";
import _ from "lodash";
import { EnumColorspace } from "../enumeration/EnumColorspace";
import { EnumH26XPreset } from "../enumeration/EnumH26XPreset";
import { EnumH26XProfile } from "../enumeration/EnumH26XProfile";
import { EnumHLSSegmentType } from "../enumeration/EnumHLSSegmentType";
import { EnumLogLevel } from "../enumeration/EnumLogLevel";
import { EnumVPXDeadline } from "../enumeration/EnumVPXDeadline";
import { EnumVPXQuality } from "../enumeration/EnumVPXQuality";
import { MediaParser } from "../media/MediaParser";
import { OptionFactory } from "../option/OptionFactory";
import { RatioOption } from "../option/RatioOption";
import { COMMAND_SEPERATOR } from "../type/Constants";
import { ITranscoder } from "../type/execution/ITranscoder";
import { IOption } from "../type/IOption";
import { IMedia } from "../type/media/IMedia";

export class Transcoder implements ITranscoder {
    _bin: string;
    _options: IOption<any>[];
    _source_media?: IMedia | null;
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
            OptionFactory.CreateStringOption(this._bin, "", 0),
        ];
        this._source_media = undefined;
        this._limit_bit_rate = false;
        // auto set "-y" and "-v panic" options by default
        this.y();
        this.v();
    }

    /**
     * Get ffmpeg binary path.
     * @returns {string}
     */
    getBin(): string {
        return this._bin;
    }

    /**
     * Set ffmpeg log level.
     * @param level {EnumLogLevel} ffmpeg log level.
     * @returns {ITranscoder}
     */
    v(level?: EnumLogLevel): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-v',
            _.isUndefined(level) ? EnumLogLevel.PANIC : level,
            1
        ));
    }

    /**
     * Set input file or source.
     * @param input {string} input file path or source
     * @param source {boolean} is input a source or not
     * @param format {string} input source format
     * @returns {ITranscoder}
     */
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

    /**
     * Set output audio bit rate.
     * @param bit_rate {number} audio bit rate
     * @returns {ITranscoder}
     */
    b_a(bit_rate: number): ITranscoder {
        this._limit_bit_rate = true;
        return this.#setOption(OptionFactory.CreateNumberOption('-b:a', bit_rate, 5.2));
    }

    /**
     * Set audio codec.
     * @param codec {string} audio codec
     * @returns {ITranscoder}
     */
    c_a(codec: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-c:a', codec, 5));
    }

    /**
     * Set audio channel layout.
     * @param layout {string} audio channel layout.
     * @returns {ITranscoder}
     */
    channel_layout(layout: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-channel_layout', layout, 5.3));
    }

    /**
     * Set no audio output.
     * @param confirm {boolean} confirm no output audio
     * @returns {ITranscoder}
     */
    an(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-an', confirm, 5.3, false, Transcoder.AUDIO_OPTION_NAMES));
    }

    /**
     * Set output audio sample rate.
     * @param sample_rate {number} audio sample rate
     * @returns {ITranscoder}
     */
    ar(sample_rate: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ar', sample_rate, 5.1));
    }

    /**
     * Set output duration time.
     * @param time {string} time
     * @returns {ITranscoder}
     */
    t(time: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-t', time, 1.2));
    }

    /**
     * Set start time offset for input.
     * @param start {string} start time
     * @returns {ITranscoder}
     */
    ss(start?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-ss', _.isUndefined(start) ? 0 : start, 1));
    }

    /**
     * Set to time offset for input.
     * @param to {string} to time
     * @returns {ITranscoder}
     */
    to(to: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-to', to, 1.1));
    }

    /**
     * Set output format.
     * @param format {string} output format
     * @returns {ITranscoder}
     */
    f(format: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-f', format, 9));
    }

    /**
     * Set output file path.
     * @param output {string} output file path.
     * @returns {ITranscoder}
     */
    output(output: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption("", output, 9.1));
    }

    /**
     * Set overwrite output file.
     * @param confirm {boolean} confirm overwrite output file.
     * @returns {ITranscoder}
     */
    y(confirm = true): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-y', confirm, 8));
    }

    /**
     * Set threads used for ffmpeg, from 0~Max int
     * @param threads {number} threads to use
     * @returns {ITranscoder}
     */
    threads(threads?: number): ITranscoder {
        threads = _.isNil(threads)
            ? 1
            : threads
        return this.#setOption(OptionFactory.CreateNumberOption(
            '-threads',
            threads,
            8,
            false,
            [],
            0,
            Number.MAX_SAFE_INTEGER
        ));
    }

    /**
     * Set video filter.
     * @param filter {string} video filter string
     * @link https://ffmpeg.org/ffmpeg-all.html#toc-Filtering
     * @returns {ITranscoder}
     */
    vf(filter: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-vf', filter, 3));
    }

    /**
     * Set concat safe option.
     * @param safe {boolean} is safe concat
     * @returns {ITranscoder}
     */
    safe(safe?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-safe', _.isNil(safe) ? "0" : safe ? "1" : "0", 3));
    }

    /**
     * Set no data output.
     * @param confirm {boolean} confirm no output data
     * @returns {ITranscoder}
     */
    dn(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-dn', confirm, 6));
    }

    /**
     * Set hls list file size.
     * @param size {number} hls file list size
     * @returns {ITranscoder}
     */
    hls_list_size(size?: number): ITranscoder {
        size = _.isNil(size) ? 0 : size;
        return this.#setOption(OptionFactory.CreateNumberOption('-hls_list_size', size, 7.1));
    }

    /**
     * Set hls output segment filename
     * @param filename {string} filename
     * @returns {ITranscoder}
     */
    hls_segment_filename(filename: string): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption('-hls_segment_filename', filename, 7.3));
    }

    /**
     * Set hls output segment file type.
     * @param type {EnumHLSSegmentType} hls segment file type.
     * @returns {ITranscoder}
     */
    hls_segment_type(type?: EnumHLSSegmentType): ITranscoder {
        type = _.isNil(type) ? EnumHLSSegmentType.MPEGTS : type;
        return this.#setOption(OptionFactory.CreateEnumOption('-hls_segment_type', type, 7.2));
    }

    /**
     * Set hls output file duration time.
     * @param time {number} hls segment duration time.
     * @returns {ITranscoder}
     */
    hls_time(time?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption('-hls_time', _.isNil(time) ? 0 : time, 7));
    }

    /**
     * Set no subtitle output.
     * @param confirm {boolean} confirm no output subtitle
     * @returns {ITranscoder}
     */
    sn(confirm?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateBooleanOption('-sn', confirm, 6));
    }

    /**
     * Set Quality/Speed ratio modifier for VPx codec, default is 1.
     * This option can be used for libvpx only.
     * @param cpu_used {number} VPx codec Quality/Speed ratio modifier
     * @returns {ITranscoder}
     */
    cpu_used(cpu_used?: number): ITranscoder {
        cpu_used = _.isNil(cpu_used) ? 1 : cpu_used;
        return this.#setOption(OptionFactory.CreateNumberOption(
            '-cpu-used',
            cpu_used,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES,
            0,
            8
        ));
    }

    /**
     * Set time to spend encoding, default is 
     * This option can be used for libvpx only.EnumVPXDeadline.REALTIME
     * @param deadline {EnumVPXDeadline} time to spend encoding
     * @returns {ITranscoder}
     */
    deadline(deadline?: EnumVPXDeadline): ITranscoder {
        deadline = _.isNil(deadline)
            ? EnumVPXDeadline.REALTIME
            : deadline;
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-deadline',
            deadline,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES,
        ));
    }

    /**
     * Set enable or not enable frame parallel decodability features, default is true
     * This option can be used for libvpx only.
     * @param enable {boolean} enable frame parallel decodability features
     * @returns {ITranscoder}
     */
    frame_parallel(enable?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-frame-parallel',
            _.isNil(enable)
                ? "1"
                : enable
                    ? "1"
                    : "0",
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES
        ));
    }

    /**
     * Set level option for libvpx, default is -1
     * This option can be used for libvpx only.
     * @param level {number} specify level
     * @returns 
     */
    level(level?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption(
            '-level',
            _.isNil(level) ? -1 : level,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES,
            -1,
            6.2
        ));
    }

    quality(quality?: EnumVPXQuality): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-quality',
            _.isNil(quality) ? EnumVPXQuality.REALTIME : quality,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES
        ));
    }

    row_mt(enable?: boolean): ITranscoder {
        return this.#setOption(OptionFactory.CreateStringOption(
            '-row-mt',
            _.isNil(enable) ? "1" : enable ? "1" : "0",
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES
        ));
    }

    speed(speed?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption(
            '-speed',
            _.isNil(speed) ? 1 : speed,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES
        ));
    }

    tile_columns(columns?: number): ITranscoder {
        return this.#setOption(OptionFactory.CreateNumberOption(
            '-tile-columns',
            _.isNil(columns) ? 1 : columns,
            4.2,
            false,
            Transcoder.H26X_OPTION_NAMES
        ));
    }

    preset(preset: EnumH26XPreset): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-preset',
            preset,
            4.2,
            false,
            Transcoder.VPX_OPTION_NAMES
        ));
    }

    profile(profile: EnumH26XProfile): ITranscoder {
        return this.#setOption(OptionFactory.CreateEnumOption(
            '-profile:v',
            profile,
            4.3,
            false,
            Transcoder.VPX_OPTION_NAMES
        ));
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

    /**
     * Set no video output.
     * @param confirm {boolean} confirm no output video
     * @returns {ITranscoder}
     */
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
        if (codec.includes('libx26')) {
            // remove vpx options
            _.remove(this._options, opt => Transcoder.VPX_OPTION_NAMES.includes(opt.getName()));
            this.#setOption(OptionFactory.CreateStringOption('-c:v', codec, 4));
            // auto set h26x options
            this.preset(EnumH26XPreset.ULTRAFAST);
            this.profile(EnumH26XProfile.HIGH);
        }
        if (codec.includes('libvpx')) {
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
        const command = this.#buildCommand().join(COMMAND_SEPERATOR);
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout) => {
                if (this.checkBin()) {
                    if (!_.isNil(error)) {
                        reject(error);
                    }
                    resolve(stdout.toString())
                } else {
                    reject(new Error(`ffmpeg not found: ${this._bin}`));
                }
            })
        });
    }

    executeSync(): string {
        try {
            if (this.checkBin()) {
                const command = this.#buildCommand().join(COMMAND_SEPERATOR);
                return execSync(command).toString();
            }
            throw new Error(`ffmpeg not found: ${this._bin}`);
        } catch (error) {
            return (<Error>error).message;
        }
    }

    isBitRateLimit(): boolean {
        return this._limit_bit_rate;
    }

    checkBin(): boolean {
        const check_cmd = `${this._bin} -version`;
        try {
            /* const stdout = */execSync(check_cmd).toString();
            return true;
        } catch (error) {
            return false;
        }
    }

    #setOption(option: IOption<any>): ITranscoder {
        !option.isMultiple() && _.remove(this._options, opt => opt.getName() === option.getName());
        !_.isEmpty(option.getConflicts()) && _.remove(this._options, opt => option.getConflicts().includes(opt.getName()));
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
        return _.compact(args);
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