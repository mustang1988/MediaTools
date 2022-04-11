import { EnumHLSSegmentType } from "../enumeration/EnumHLSSegmentType";
import { ITranscoder } from "../type/execution/ITranscoder";
import { Transcoder } from "./Transcoder";

export class TranscoderFactory {
    /**
     * Create a Transcoder instance to transcode video file to h.264, aac, mp4 file.
     * @param input {string} input file path.
     * @param output {string} output file path.
     * @param bin {string} ffmpeg binary path.
     * @returns {ITranscoder}
     */
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

    /**
     * Create a Transcoder instance to transcode video file to vp9, opus, webm file.
     * @param input {string} input file path.
     * @param output {string} output file path.
     * @param bin {string} ffmpeg binary path.
     * @returns {ITranscoder}
     */
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

    /**
     * Create a Transcoder instance to transcode video file to h.264, aac, ts file list with m3u8.
     * @param input {string} input file path.
     * @param output {string} output file path.
     * @param bin {string} ffmpeg binary path.
     * @returns {ITranscoder}
     */
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