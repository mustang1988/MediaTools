import { describe, it } from 'mocha';
import assert from 'assert';
import { Media } from '../../src/media/Media';
import { VideoStream } from '../../src/media/VideoStream';
import { AudioStream } from '../../src/media/AudioStream';
import { Format } from '../../src/media/Format';

const normal_data = JSON.parse(`{
    "streams": [
        {
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
        },
        {
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
        }
    ],
    "format": {
        "filename": "Swordsmith.mp4",
        "nb_streams": 2,
        "nb_programs": 0,
        "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
        "format_long_name": "QuickTime / MOV",
        "start_time": "0.000000",
        "duration": "86.101333",
        "size": "770255991",
        "bit_rate": "71567392",
        "probe_score": 100,
        "tags": {
            "major_brand": "isom",
            "minor_version": "1",
            "compatible_brands": "isom",
            "creation_time": "2016-10-24T05:33:14.000000Z"
        }
    }
}`);
const empty_data = JSON.parse('{}');

describe('Media.ts', () => {
    it('constructor()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
    });
    it('hasVideoStream()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasVideoStream(), true);
    });
    it('hasVideoStream() false', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasVideoStream(), false);
    });
    it('hasAudioStream()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasAudioStream(), true);
    });
    it('hasAudioStream() false', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasAudioStream(), false);
    });
    it('hasFormat()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasFormat(), true);
    });
    it('hasFormat() false', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.hasFormat(), false);
    });
    it('getVideoStream()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.notDeepEqual(media.getVideoStream(), null);
        assert.deepEqual(media.getVideoStream() instanceof VideoStream, true);
    });
    it('getVideoStream() not given', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.getVideoStream(), null);
    });
    it('getAudioStream()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.notDeepEqual(media.getAudioStream(), null);
        assert.deepEqual(media.getAudioStream() instanceof AudioStream, true);
    });
    it('getAudioStream() not given', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.getAudioStream(), null);
    });
    it('getFormat()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.notDeepEqual(media.getFormat(), null);
        assert.deepEqual(media.getFormat() instanceof Format, true);
    });
    it('getFormat() not given', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.getFormat(), null);
    });
    it('isHDR()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.isHDR(), true);
    });
    it('isHDR() color_space not given', () => {
        const test_data = JSON.parse(`{
            "streams": [
                {
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
                },
                {
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
                }
            ],
            "format": {
                "filename": "Swordsmith.mp4",
                "nb_streams": 2,
                "nb_programs": 0,
                "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
                "format_long_name": "QuickTime / MOV",
                "start_time": "0.000000",
                "duration": "86.101333",
                "size": "770255991",
                "bit_rate": "71567392",
                "probe_score": 100,
                "tags": {
                    "major_brand": "isom",
                    "minor_version": "1",
                    "compatible_brands": "isom",
                    "creation_time": "2016-10-24T05:33:14.000000Z"
                }
            }
        }`);
        const media = new Media(test_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.isHDR(), true);
    });
    it('isHDR() color_space, color_primaries not given', () => {
        const test_data = JSON.parse(`{
            "streams": [
                {
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
                    "color_transfer": "smpte2084",
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
                },
                {
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
                }
            ],
            "format": {
                "filename": "Swordsmith.mp4",
                "nb_streams": 2,
                "nb_programs": 0,
                "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
                "format_long_name": "QuickTime / MOV",
                "start_time": "0.000000",
                "duration": "86.101333",
                "size": "770255991",
                "bit_rate": "71567392",
                "probe_score": 100,
                "tags": {
                    "major_brand": "isom",
                    "minor_version": "1",
                    "compatible_brands": "isom",
                    "creation_time": "2016-10-24T05:33:14.000000Z"
                }
            }
        }`);
        const media = new Media(test_data);
        assert.deepEqual(media.isHDR(), true);
    });
    it('isHDR() color_space, color_primaries, color_transfer not given', () => {
        const test_data = JSON.parse(`{
            "streams": [
                {
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
                },
                {
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
                }
            ],
            "format": {
                "filename": "Swordsmith.mp4",
                "nb_streams": 2,
                "nb_programs": 0,
                "format_name": "mov,mp4,m4a,3gp,3g2,mj2",
                "format_long_name": "QuickTime / MOV",
                "start_time": "0.000000",
                "duration": "86.101333",
                "size": "770255991",
                "bit_rate": "71567392",
                "probe_score": 100,
                "tags": {
                    "major_brand": "isom",
                    "minor_version": "1",
                    "compatible_brands": "isom",
                    "creation_time": "2016-10-24T05:33:14.000000Z"
                }
            }
        }`);
        const media = new Media(test_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.isHDR(), false);
    });
    it('isHDR() not given', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.deepEqual(media.isHDR(), false);
    });
    it('toObject()', () => {
        const media = new Media(normal_data);
        assert.notDeepEqual(media, null);
        assert.notDeepEqual(media.toObject(), null);
        assert.notDeepEqual(media.toObject(), {});
    });
    it('toObject() empty', () => {
        const media = new Media(empty_data);
        assert.notDeepEqual(media, null);
        assert.notDeepEqual(media.toObject(), null);
        assert.notDeepEqual(media.toObject(), {});
    });
});