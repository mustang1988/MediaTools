import { EnumColorspace } from "../../enumeration/EnumColorspace";
import { EnumConcatSafe } from "../../enumeration/EnumConcatSafe";
import { EnumH26XPreset } from "../../enumeration/EnumH26XPreset";
import { EnumH26XProfile } from "../../enumeration/EnumH26XProfile";
import { EnumHLSSegmentType } from "../../enumeration/EnumHLSSegmentType";
import { EnumLogLevel } from "../../enumeration/EnumLogLevel";
import { EnumVPXDeadline } from "../../enumeration/EnumVPXDeadline";
import { EnumVPXQuality } from "../../enumeration/EnumVPXQuality";

export interface ITranscoder {
    getBin(): string;

    v(level?: EnumLogLevel): ITranscoder;

    i(input: string, source?: boolean, format?: string): ITranscoder;

    b_a(bit_rate: number): ITranscoder;

    c_a(codec: string): ITranscoder;

    channel_layout(layout: string): ITranscoder;

    an(confirm?: boolean): ITranscoder;

    ar(sample_rate: number): ITranscoder;

    t(time: number): ITranscoder;

    ss(start?: number): ITranscoder;

    to(to: number): ITranscoder;

    f(format: string): ITranscoder;

    output(output: string): ITranscoder;

    y(confirm?: boolean): ITranscoder;

    threads(threads?: number): ITranscoder;

    vf(filter: string): ITranscoder;

    safe(safe?: EnumConcatSafe): ITranscoder;

    dn(confirm?: boolean): ITranscoder;

    hls_list_size(size?: number): ITranscoder;

    hls_segment_filename(filename: string): ITranscoder;

    hls_segment_type(type?: EnumHLSSegmentType): ITranscoder;

    hls_time(time?: number): ITranscoder;

    sn(confirm?: boolean): ITranscoder;

    cpu_used(cpu_used?: number): ITranscoder;

    deadline(deadline?: EnumVPXDeadline): ITranscoder;

    frame_parallel(enable?: boolean): ITranscoder;

    level(level?: number): ITranscoder;

    quality(quality?: EnumVPXQuality): ITranscoder;

    row_mt(enable?: boolean): ITranscoder;

    speed(speed?: number): ITranscoder;

    tile_columns(columns?: number): ITranscoder;

    preset(preset: EnumH26XPreset): ITranscoder;

    profile(profile: EnumH26XProfile): ITranscoder;

    color_primaries(color_primaries: number): ITranscoder;

    color_range(color_range: number): ITranscoder;

    colorspace(colorspace: EnumColorspace): ITranscoder;

    color_trc(color_trc: number): ITranscoder

    r(frame_rate: string): ITranscoder;

    g(gop: number): ITranscoder;

    maxrate(bit_rate: number): ITranscoder;

    minrate(bit_rate: number): ITranscoder;

    vn(confirm?: boolean): ITranscoder;

    pix_fmt(pix_fmt: string): ITranscoder;

    b_V(bit_rate: number): ITranscoder;

    c_v(codec: string): ITranscoder;

    execute(): Promise<string>;

    executeSync(): string;

    isBitRateLimit(): boolean;
}