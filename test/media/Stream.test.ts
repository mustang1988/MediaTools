import { describe, it } from 'mocha';
import assert from 'assert';
import { Stream } from '../../src/media/Stream';
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

describe('Steam.ts', () => {
    it('constructor()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
    })
    it('getIndex()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getIndex()?.getValue(), _.get(normal_data, 'index', null));
    });
    it('getIndex() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getIndex()?.getValue(), _.get(empty_data, 'index', null));
    });
    it('getCodecName()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecName()?.getValue(), _.get(normal_data, 'codec_name', null));
    });
    it('getCodecName() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecName()?.getValue(), _.get(empty_data, 'codec_name', null));
    });
    it('getCodecLongName()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecLongName()?.getValue(), _.get(normal_data, 'codec_long_name', null));
    });
    it('getCodecLongName() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecLongName()?.getValue(), _.get(empty_data, 'codec_long_name', null));
    });
    it('getProfile()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getProfile()?.getValue(), _.get(normal_data, 'profile', null));
    });
    it('getProfile() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getProfile()?.getValue(), _.get(empty_data, 'profile', null));
    });
    it('getCodecTagString()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecTagString()?.getValue(), _.get(normal_data, 'codec_tag_string', null));
    });
    it('getCodecTagString() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecTagString()?.getValue(), _.get(empty_data, 'codec_tag_string', null));
    });
    it('getCodecTag()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecTag()?.getValue(), _.get(normal_data, 'codec_tag', null));
    });
    it('getCodecTag() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getCodecTag()?.getValue(), _.get(empty_data, 'codec_tag', null));
    });
    it('getRFrameRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getRFrameRate()?.getValue().toString(), _.get(normal_data, 'r_frame_rate', null));
    });
    it('getRFrameRate() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getRFrameRate()?.getValue().toString(), _.get(empty_data, 'r_frame_rate', null));
    });
    it('getAvgFrameRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getAvgFrameRate()?.getValue().toString(), _.get(normal_data, 'avg_frame_rate', null));
    });
    it('getAvgFrameRate() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getAvgFrameRate()?.getValue().toString(), _.get(empty_data, 'avg_frame_rate', null));
    });
    it('getTimeBase()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getTimeBase()?.getValue().toString(), _.get(normal_data, 'time_base', null));
    });
    it('getTimeBase() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getTimeBase()?.getValue().toString(), _.get(empty_data, 'time_base', null));
    });
    it('getStartPTS()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getStartPTS()?.getValue(), _.get(normal_data, 'start_pts', null));
    });
    it('getStartPTS() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getStartPTS()?.getValue(), _.get(empty_data, 'start_pts', null));
    });
    it('getStartTime()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getStartTime()?.getValue(), _.get(normal_data, 'start_time', null));
    });
    it('getStartTime() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getStartTime()?.getValue(), _.get(empty_data, 'start_time', null));
    });
    it('getDurationTS()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDurationTS()?.getValue(), _.get(normal_data, 'duration_ts', null));
    });
    it('getDurationTS() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDurationTS()?.getValue(), _.get(empty_data, 'duration_ts', null));
    });
    it('getDuration()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDuration()?.getValue(), _.get(normal_data, 'duration', null));
    });
    it('getDuration() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDuration()?.getValue(), _.get(empty_data, 'duration', null));
    });
    it('getBitRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getBitRate()?.getValue(), _.get(normal_data, 'bit_rate', null));
    });
    it('getBitRate() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getBitRate()?.getValue(), _.get(empty_data, 'bit_rate', null));
    });
    it('getNbFrames()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getNbFrames()?.getValue(), _.get(normal_data, 'nb_frames', null));
    });
    it('getNbFrames() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getNbFrames()?.getValue(), _.get(empty_data, 'nb_frames', null));
    });
    it('getDisposition()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDisposition()?.getValue(), _.get(normal_data, 'disposition', null));
    });
    it('getDisposition() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getDisposition()?.getValue(), _.get(empty_data, 'disposition', null));
    });
    it('getTags()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getTags()?.getValue(), _.get(normal_data, 'tags', null));
    });
    it('getTags() not given', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.getTags()?.getValue(), _.get(empty_data, 'tags', null));
    });
    it('hasIndex()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasIndex(), true);
    });
    it('hasIndex() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasIndex(), false);
    });
    it('hasCodecName()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecName(), true);
    });
    it('hasCodecName() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecName(), false);
    });
    it('hasCodecLongName()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecLongName(), true);
    });
    it('hasCodecLongName() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecLongName(), false);
    });
    it('hasProfile()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasProfile(), true);
    });
    it('hasProfile() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasProfile(), false);
    });
    it('hasCodecTagString()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecTagString(), true);
    });
    it('hasCodecTagString() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecTagString(), false);
    });
    it('hasCodecTag()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecTag(), true);
    });
    it('hasCodecTag() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasCodecTag(), false);
    });
    it('hasRFrameRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasRFrameRate(), true);
    });
    it('hasRFrameRate() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasRFrameRate(), false);
    });
    it('hasAvgFrameRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasAvgFrameRate(), true);
    });
    it('hasAvgFrameRate() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasAvgFrameRate(), false);
    });
    it('hasTimeBase()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasTimeBase(), true);
    });
    it('hasTimeBase() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasTimeBase(), false);
    });
    it('hasStartPTS()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasStartPTS(), true);
    });
    it('hasStartPTS() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasStartPTS(), false);
    });
    it('hasStartTime()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasStartTime(), true);
    });
    it('hasStartTime() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasStartTime(), false);
    });
    it('hasDurationTS()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDurationTS(), true);
    });
    it('hasDurationTS() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDurationTS(), false);
    });
    it('hasDuration()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDuration(), true);
    });
    it('hasDuration() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDuration(), false);
    });
    it('hasBitRate()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasBitRate(), true);
    });
    it('hasBitRate() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasBitRate(), false);
    });
    it('hasNbFrames()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasNbFrames(), true);
    });
    it('hasNbFrames() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasNbFrames(), false);
    });
    it('hasDisposition()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDisposition(), true);
    });
    it('hasDisposition() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasDisposition(), false);
    });
    it('hasTags()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasTags(), true);
    });
    it('hasTags() false', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.deepEqual(stream.hasTags(), false);
    });
    it('toObject()', () => {
        const stream = new Stream(normal_data);
        assert.notDeepEqual(stream, null);
        assert.notDeepEqual(stream.toObject(), null);
        assert.notDeepEqual(stream.toObject(), {});
    });
    it('toObject() empty', () => {
        const stream = new Stream(empty_data);
        assert.notDeepEqual(stream, null);
        assert.notDeepEqual(stream.toObject(), null);
        assert.notDeepEqual(stream.toObject(), {});
    });
});