import { describe, it } from 'mocha';
import assert from 'assert';
import { VideoStream } from '../../src/media/VideoStream';
import _ from 'lodash';

const normal_data = JSON.parse(`{
    "index": 0,
    "codec_name": "hevc",
    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
    "profile": "Main 10",
    "codec_type": "video",
    "codec_tag_string": "hvc1",
    "codec_tag": "0x31637668",
    "width": 3840,
    "height": 2160,
    "coded_width": 3840,
    "coded_height": 2160,
    "closed_captions": 0,
    "film_grain": 0,
    "has_b_frames": 1,
    "sample_aspect_ratio": "1:1",
    "display_aspect_ratio": "16:9",
    "pix_fmt": "yuv420p10le",
    "level": 153,
    "color_range": "tv",
    "color_space": "bt2020nc",
    "color_transfer": "smpte2084",
    "color_primaries": "bt2020",
    "chroma_location": "topleft",
    "refs": 1,
    "id": "0x1",
    "r_frame_rate": "60000/1001",
    "avg_frame_rate": "60000/1001",
    "time_base": "1/60000",
    "start_pts": 0,
    "start_time": "0.000000",
    "duration_ts": 5165160,
    "duration": "86.086000",
    "bit_rate": "71382367",
    "nb_frames": "5160",
    "extradata_size": 150,
    "disposition": {
        "default": 1,
        "dub": 0,
        "original": 0,
        "comment": 0,
        "lyrics": 0,
        "karaoke": 0,
        "forced": 0,
        "hearing_impaired": 0,
        "visual_impaired": 0,
        "clean_effects": 0,
        "attached_pic": 0,
        "timed_thumbnails": 0,
        "captions": 0,
        "descriptions": 0,
        "metadata": 0,
        "dependent": 0,
        "still_image": 0
    },
    "tags": {
        "creation_time": "2016-10-24T06:29:51.000000Z",
        "language": "und",
        "handler_name": "Video Media Handler",
        "vendor_id": "[0][0][0][0]",
        "encoder": "HEVC Coding"
    }
}`);
const empty_data = JSON.parse('{}');

describe('VideoStream.ts', () => {
    it('constructor', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
    });
    it('getWidth()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        console.log(video_stream)
        assert.deepEqual(video_stream.getWidth()?.getValue(), _.get(normal_data, 'width', null));
    });
    it('getWidth() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getWidth()?.getValue(), _.get(empty_data, 'width', null));
    });
    it('getHeight()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getHeight()?.getValue(), _.get(normal_data, 'height', null));
    });
    it('getHeight() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getHeight()?.getValue(), _.get(empty_data, 'height', null));
    });
    it('getCodedWidth()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getCodedWidth()?.getValue(), _.get(normal_data, 'coded_width', null));
    });
    it('getCodedWidth() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getCodedWidth()?.getValue(), _.get(empty_data, 'coded_width', null));
    });
    it('getCodedHeight()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getCodedHeight()?.getValue(), _.get(normal_data, 'coded_height', null));
    });
    it('getCodedHeight() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getCodedHeight()?.getValue(), _.get(empty_data, 'coded_height', null));
    });
    it('getClosedCaptions()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getClosedCaptions()?.getValue(), _.get(normal_data, 'closed_captions', null));
    });
    it('getClosedCaptions() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getClosedCaptions()?.getValue(), _.get(empty_data, 'closed_captions', null));
    });
    it('getHasBFrames()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getHasBFrames()?.getValue(), _.get(normal_data, 'has_b_frames', null));
    });
    it('getHasBFrames() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getHasBFrames()?.getValue(), _.get(empty_data, 'has_b_frames', null));
    });
    it('getSampleAspectRatio()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getSampleAspectRatio()?.getValue()?.toString(), _.get(normal_data, 'sample_aspect_ratio', null));
    });
    it('getSampleAspectRatio() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getSampleAspectRatio()?.getValue()?.toString(), _.get(empty_data, 'sample_aspect_ratio', null));
    });
    it('getDisplayAspectTatio()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getDisplayAspectTatio()?.getValue()?.toString(), _.get(normal_data, 'display_aspect_ratio', null));
    });
    it('getDisplayAspectTatio() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getDisplayAspectTatio()?.getValue()?.toString(), _.get(empty_data, 'display_aspect_ratio', null));
    });
    it('getPixFmt()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getPixFmt()?.getValue(), _.get(normal_data, 'pix_fmt', null));
    });
    it('getPixFmt() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getPixFmt()?.getValue(), _.get(empty_data, 'pix_fmt', null));
    });
    it('getLevel()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getLevel()?.getValue(), _.get(normal_data, 'level', null));
    });
    it('getLevel() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getLevel()?.getValue(), _.get(empty_data, 'level', null));
    });
    it('getColorRange()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorRange()?.getValue(), _.get(normal_data, 'color_range', null));
    });
    it('getColorRange() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorRange()?.getValue(), _.get(empty_data, 'color_range', null));
    });
    it('getColorSpace()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorSpace()?.getValue(), _.get(normal_data, 'color_space', null));
    });
    it('getColorSpace() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorSpace()?.getValue(), _.get(empty_data, 'color_space', null));
    });
    it('getColorTransfer()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorTransfer()?.getValue(), _.get(normal_data, 'color_transfer', null));
    });
    it('getColorTransfer() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorTransfer()?.getValue(), _.get(empty_data, 'color_transfer', null));
    });
    it('getColorPrimaries()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorPrimaries()?.getValue(), _.get(normal_data, 'color_primaries', null));
    });
    it('getColorPrimaries() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getColorPrimaries()?.getValue(), _.get(empty_data, 'color_primaries', null));
    });
    it('getChromaLocation()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getChromaLocation()?.getValue(), _.get(normal_data, 'chroma_location', null));
    });
    it('getChromaLocation() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getChromaLocation()?.getValue(), _.get(empty_data, 'chroma_location', null));
    });
    it('getRefs()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getRefs()?.getValue(), _.get(normal_data, 'refs', null));
    });
    it('getRefs() not given', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.getRefs()?.getValue(), _.get(empty_data, 'refs', null));
    });
    it('hasWidth()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasWidth(), true);
    });
    it('hasWidth() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasWidth(), false);
    });
    it('hasHeight()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasHeight(), true);
    });
    it('hasHeight() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasHeight(), false);
    });
    it('hasCodedWidth()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasCodedWidth(), true);
    });
    it('hasCodedWidth() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasCodedWidth(), false);
    });
    it('hasCodedHeight()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasCodedHeight(), true);
    });
    it('hasCodedHeight() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasCodedHeight(), false);
    });
    it('hasClosedCaptions()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasClosedCaptions(), true);
    });
    it('hasClosedCaptions() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasClosedCaptions(), false);
    });
    it('hasHasBFrames()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasHasBFrames(), true);
    });
    it('hasHasBFrames() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasHasBFrames(), false);
    });
    it('hasSampleAspectRatio()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasSampleAspectRatio(), true);
    });
    it('hasSampleAspectRatio() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasSampleAspectRatio(), false);
    });
    it('hasDisplayAspectTatio()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasDisplayAspectTatio(), true);
    });
    it('hasDisplayAspectTatio() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasDisplayAspectTatio(), false);
    });
    it('hasPixFmt()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasPixFmt(), true);
    });
    it('hasPixFmt() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasPixFmt(), false);
    });
    it('hasLevel()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasLevel(), true);
    });
    it('hasLevel() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasLevel(), false);
    });
    it('hasColorRange()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorRange(), true);
    });
    it('hasColorRange() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorRange(), false);
    });
    it('hasColorSpace()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorSpace(), true);
    });
    it('hasColorSpace() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorSpace(), false);
    });
    it('hasColorTransfer()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorTransfer(), true);
    });
    it('hasColorTransfer() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorTransfer(), false);
    });
    it('hasColorPrimaries()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorPrimaries(), true);
    });
    it('hasColorPrimaries() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasColorPrimaries(), false);
    });
    it('hasChromaLocation()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasChromaLocation(), true);
    });
    it('hasChromaLocation() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasChromaLocation(), false);
    });
    it('hasRefs()', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasRefs(), true);
    });
    it('hasRefs() false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.hasRefs(), false);
    });
    it('isCodec(codec: string)', () => {
        const video_stream = new VideoStream(normal_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.isCodec('hevc'), true);
    });
    it('isCodec(codec: string) false', () => {
        const video_stream = new VideoStream(empty_data);
        assert.notDeepEqual(video_stream, null);
        assert.deepEqual(video_stream.isCodec('hevc'), false);
    });
});