import { EnumHLSSegmentType } from "../enumeration/EnumHLSSegmentType";
import { ITranscoder } from "../type/execution/ITranscoder";
import { Transcoder } from "./Transcoder";

export class TranscoderFactory {
    static ToMp4(
        input: string,
        output: string,
        bin?: string
    ): ITranscoder {
        output = output.replace(/\.\w+$/, ".mp4");
        return new Transcoder(bin)
            .i(input)
            .c_v("libx264")
            .c_a("aac")
            .pix_fmt("yuv420p")
            .f('mp4')
            .output(output)
    }

    static ToWebM(
        input: string,
        output: string,
        bin?: string
    ): ITranscoder {
        output = output.replace(/\.\w+$/, ".webm");
        return new Transcoder(bin)
            .i(input)
            .c_v("libvpx-vp9")
            .c_a("libopus")
            .pix_fmt("yuv420p")
            .f('webm')
            .output(output)
    }

    static ToHLS(
        input: string,
        output: string,
        bin?: string,
        hls_list_size?: number,
        hls_segment_type?: EnumHLSSegmentType,
        hls_time?: number
    ): ITranscoder {
        output = output.replace(/\.\w+$/, ".m3u8");
        return TranscoderFactory.ToMp4(input, output, bin)
            .f('hls')
            .hls_list_size(hls_list_size)
            .hls_segment_type(hls_segment_type)
            .hls_time(hls_time)
            .output(output);
    }
}