import { describe, it } from 'mocha';
import assert from 'assert';
import { AudioStream } from '../../src/media/AudioStream';
import _ from 'lodash';

const normal_data = JSON.parse(`{
    "index": 1,
    "codec_name": "aac",
    "codec_long_name": "AAC (Advanced Audio Coding)",
    "profile": "LC",
    "codec_type": "audio",
    "codec_tag_string": "mp4a",
    "codec_tag": "0x6134706d",
    "sample_fmt": "fltp",
    "sample_rate": "48000",
    "channels": 2,
    "channel_layout": "stereo",
    "bits_per_sample": 0,
    "id": "0x2",
    "r_frame_rate": "0/0",
    "avg_frame_rate": "0/0",
    "time_base": "1/48000",
    "start_pts": 0,
    "start_time": "0.000000",
    "duration_ts": 4132864,
    "duration": "86.101333",
    "bit_rate": "192000",
    "nb_frames": "4037",
    "extradata_size": 2,
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
        "language": "eng",
        "handler_name": "Sound Media Handler",
        "vendor_id": "[0][0][0][0]"
    }
}`);
const empty_data = JSON.parse('{}');

describe('AudioStream.ts', () => {
    it('constructor()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
    });
    it('getSampleFmt()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getSampleFmt()?.getValue(), _.get(normal_data, 'sample_fmt', null));
    });
    it('getSampleFmt() not given', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getSampleFmt()?.getValue(), _.get(empty_data, 'sample_fmt', null));
    });
    it('getSampleRate()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getSampleRate()?.getValue(), _.get(normal_data, 'sample_rate', null));
    });
    it('getSampleRate() not given', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getSampleRate()?.getValue(), _.get(empty_data, 'sample_rate', null));
    });
    it('getChannels()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getChannels()?.getValue(), _.get(normal_data, 'channels', null));
    });
    it('getChannels() not given', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getChannels()?.getValue(), _.get(empty_data, 'channels', null));
    });
    it('getChannelLayout()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getChannelLayout()?.getValue(), _.get(normal_data, 'channel_layout', null));
    });
    it('getChannelLayout() not given', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getChannelLayout()?.getValue(), _.get(empty_data, 'channel_layout', null));
    });
    it('getBitsPerSample()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getBitsPerSample()?.getValue(), _.get(normal_data, 'bits_per_sample', null));
    });
    it('getBitsPerSample() not given', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.getBitsPerSample()?.getValue(), _.get(empty_data, 'bits_per_sample', null));
    });
    it('hasSampleFmt()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasSampleFmt(), true);
    });
    it('hasSampleFmt() false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasSampleFmt(), false);
    });
    it('hasSampleRate()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasSampleRate(), true);
    });
    it('hasSampleRate() false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasSampleRate(), false);
    });
    it('hasChannels()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasChannels(), true);
    });
    it('hasChannels() false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasChannels(), false);
    });
    it('hasChannelLayout()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasChannelLayout(), true);
    });
    it('hasChannelLayout() false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasChannelLayout(), false);
    });
    it('hasBitsPerSample()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasBitsPerSample(), true);
    });
    it('hasBitsPerSample() false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.hasBitsPerSample(), false);
    });
    it('isCodec(codec: string)', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        console.log(audio_stream)
        console.log(audio_stream.isCodec('aac'));
        assert.deepEqual(audio_stream.isCodec('aac'), true);
    });
    it('isCodec(codec: string) false', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.deepEqual(audio_stream.isCodec('aac'), false);
    });
    it('toObject()', () => {
        const audio_stream = new AudioStream(normal_data);
        assert.notDeepEqual(audio_stream, null);
        assert.notDeepEqual(audio_stream.toObject(), null);
        assert.notDeepEqual(audio_stream.toObject(), {});
    });
    it('toObject() empty', () => {
        const audio_stream = new AudioStream(empty_data);
        assert.notDeepEqual(audio_stream, null);
        assert.notDeepEqual(audio_stream.toObject(), null);
        assert.notDeepEqual(audio_stream.toObject(), {});
    });
});