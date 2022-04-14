import { EnumColorspace } from "../../enumeration/EnumColorspace";
import { EnumH26XPreset } from "../../enumeration/EnumH26XPreset";
import { EnumH26XProfile } from "../../enumeration/EnumH26XProfile";
import { EnumHLSSegmentType } from "../../enumeration/EnumHLSSegmentType";
import { EnumLogLevel } from "../../enumeration/EnumLogLevel";
import { EnumVPXDeadline } from "../../enumeration/EnumVPXDeadline";
import { EnumVPXQuality } from "../../enumeration/EnumVPXQuality";
import { IExecutable } from "./IExecutable";

export interface ITranscoder extends IExecutable<string> {
    /**
     * Set ffmpeg log level.
     * @param level {EnumLogLevel} ffmpeg log level.
     * @returns {ITranscoder}
     */
    v(level?: EnumLogLevel): ITranscoder;

    /**
     * Set input file or source.
     * @param input {string} input file path or source
     * @param source {boolean} is input a source or not
     * @param format {string} input source format
     * @returns {ITranscoder}
     */
    i(input: string, source?: boolean, format?: string): ITranscoder;

    /**
     * Set output audio bit rate.
     * @param bit_rate {number} audio bit rate
     * @returns {ITranscoder}
     */
    b_a(bit_rate: number): ITranscoder;

    /**
     * Set audio codec.
     * @param codec {string} audio codec
     * @returns {ITranscoder}
     */
    c_a(codec: string): ITranscoder;

    /**
     * Set audio channel layout.
     * @param layout {string} audio channel layout.
     * @returns {ITranscoder}
     */
    channel_layout(layout: string): ITranscoder;

    /**
     * Set no audio output.
     * @param confirm {boolean} confirm no output audio
     * @returns {ITranscoder}
     */
    an(confirm?: boolean): ITranscoder;

    /**
     * Set output audio sample rate.
     * @param sample_rate {number} audio sample rate
     * @returns {ITranscoder}
     */
    ar(sample_rate: number): ITranscoder;

    /**
     * Set output duration time.
     * @param time {string} time
     * @returns {ITranscoder}
     */
    t(time: number): ITranscoder;

    /**
     * Set start time offset for input.
     * @param start {string} start time
     * @returns {ITranscoder}
     */
    ss(start?: number): ITranscoder;

    /**
     * Set to time offset for input.
     * @param to {string} to time
     * @returns {ITranscoder}
     */
    to(to: number): ITranscoder;

    /**
     * Set output format.
     * @param format {string} output format
     * @returns {ITranscoder}
     */
    f(format: string): ITranscoder;

    /**
     * Set output file path.
     * @param output {string} output file path.
     * @returns {ITranscoder}
     */
    output(output: string): ITranscoder;

    /**
     * Set overwrite output file.
     * @param confirm {boolean} confirm overwrite output file.
     * @returns {ITranscoder}
     */
    y(confirm?: boolean): ITranscoder;

    /**
     * Set threads used for ffmpeg, from 0~Max int
     * @param threads {number} threads to use
     * @returns {ITranscoder}
     */
    threads(threads?: number): ITranscoder;

    /**
     * Set video filter.
     * @param filter {string} video filter string
     * @link https://ffmpeg.org/ffmpeg-all.html#toc-Filtering
     * @returns {ITranscoder}
     */
    vf(filter: string): ITranscoder;

    /**
     * Set concat safe option.
     * @param safe {boolean} is safe concat
     * @returns {ITranscoder}
     */
    safe(safe?: boolean): ITranscoder;

    /**
     * Set no data output.
     * @param confirm {boolean} confirm no output data
     * @returns {ITranscoder}
     */
    dn(confirm?: boolean): ITranscoder;

    /**
     * Set hls list file size.
     * @param size {number} hls file list size
     * @returns {ITranscoder}
     */
    hls_list_size(size?: number): ITranscoder;

    /**
     * Set hls output segment filename
     * @param filename {string} filename
     * @returns {ITranscoder}
     */
    hls_segment_filename(filename: string): ITranscoder;

    /**
     * Set hls output segment file type.
     * @param type {EnumHLSSegmentType} hls segment file type.
     * @returns {ITranscoder}
     */
    hls_segment_type(type?: EnumHLSSegmentType): ITranscoder;

    /**
     * Set hls output file duration time.
     * @param time {number} hls segment duration time.
     * @returns {ITranscoder}
     */
    hls_time(time?: number): ITranscoder;

    /**
     * Set no subtitle output.
     * @param confirm {boolean} confirm no output subtitle
     * @returns {ITranscoder}
     */
    sn(confirm?: boolean): ITranscoder;

    /**
     * Set Quality/Speed ratio modifier for VPx codec, default is 1.
     * This option can be used for libvpx only.
     * @param cpu_used {number} VPx codec Quality/Speed ratio modifier
     * @returns {ITranscoder}
     */
    cpu_used(cpu_used?: number): ITranscoder;

    /**
     * Set time to spend encoding, default is 
     * This option can be used for libvpx only.EnumVPXDeadline.GOOD
     * @param deadline {EnumVPXDeadline} time to spend encoding
     * @returns {ITranscoder}
     */
    deadline(deadline?: EnumVPXDeadline): ITranscoder;

    /**
     * Set enable or not enable frame parallel decodability features, default is true
     * This option can be used for libvpx only.
     * @param enable {boolean} enable frame parallel decodability features
     * @returns {ITranscoder}
     */
    frame_parallel(enable?: boolean): ITranscoder;

    /**
     * Set level option for libvpx, default is -1
     * This option can be used for libvpx only.
     * @param level {number} specify level
     * @returns 
     */
    level(level?: number): ITranscoder;

    /**
     * Set quality option for libvpx, default is EnumVPXQuality.GOOD
     * This option can be used for libvpx only.
     * @param quality {EnumVPXQuality} quality
     * @returns 
     */
    quality(quality?: EnumVPXQuality): ITranscoder;

    /**
     * Enable row based multi-threading option for libvpx, default is true
     * This option can be used for libvpx only.
     * @param enable {boolean} enable row based multi-threading
     * @returns {ITranscoder}
     */
    row_mt(enable?: boolean): ITranscoder;

    /**
     * Set speed option for libvpx, default is 1
     * This option can be used for libvpx only.
     * @param speed {number} speed
     * @returns {ITranscoder}
     */
    speed(speed?: number): ITranscoder;

    /**
     * Set number of tile columns to use for libvpx, default is 1
     * This option can be used for libvpx only.
     * @param columns {number} number of tile columns to use
     * @returns 
     */
    tile_columns(columns?: number): ITranscoder;

    /**
     * Set preset option for libx264, default is EnumX264Preset.ULTRAFAST
     * @param preset {EnumVPXPreset} preset
     * @returns 
     */
    preset(preset?: EnumH26XPreset): ITranscoder;

    /**
     * Set preset option for libx264, default is EnumH26XProfile.MAIN
     * @param profile {EnumH26XProfile} profile
     * @returns 
     */
    profile(profile?: EnumH26XProfile): ITranscoder;

    /**
     * Set output colour primaries
     * @param color_primaries {EnumH26XColorPrimaries} output colour primaries
     * @returns {ITranscoder}
     */
    color_primaries(color_primaries: number): ITranscoder;

    /**
     * Set color range flag
     * @param color_range {EnumH26XColorRange} color range flag
     * @returns {ITranscoder}
     */
    color_range(color_range: number): ITranscoder;

    /**
     * Select colorspace
     * @param colorspace {EnumH26XColorspace} colorspace
     * @returns {ITranscoder}
     */
    colorspace(colorspace: EnumColorspace): ITranscoder;

    /**
     * Select color transfer
     * @param color_trc {number} color_trc
     * @returns {ITranscoder}
     */
    color_trc(color_trc: number): ITranscoder

    /**
     * Set frame rate
     * @param frame_rate {string} frame rate ratio string
     * @returns {ITranscoder}
     */
    r(frame_rate: string): ITranscoder;

    /**
     * Set group of pictures size
     * @param gop {number} gop
     * @returns {ITranscoder}
     */
    g(gop: number): ITranscoder;

    /**
     * Set max bit rate
     * @param bit_rate {number} bit rate
     * @returns {ITranscoder}
     */
    maxrate(bit_rate: number): ITranscoder;

    /**
    * Set min bit rate
    * @param bit_rate {number} bit rate
    * @returns {ITranscoder}
    */
    minrate(bit_rate: number): ITranscoder;

    /**
     * Set no video output.
     * @param confirm {boolean} confirm no output video
     * @returns {ITranscoder}
     */
    vn(confirm?: boolean): ITranscoder;

    /**
     * Set pixel format
     * @param pix_fmt {string} pixel format
     * @returns {ITranscoder}
     */
    pix_fmt(pix_fmt: string): ITranscoder;

    /**
     * Set video bit rate
     * @param bit_rate {number} bit rate
     * @returns {ITranscoder}
     */
    b_V(bit_rate: number): ITranscoder;

    /**
     * Set video codec
     * @param codec {string} codec
     * @returns {ITranscoder}
     */
    c_v(codec: string): ITranscoder;

    /**
     * Whether the bit rate has been limited manual
     * @returns {boolean}
     */
    isBitRateLimit(): boolean;
}