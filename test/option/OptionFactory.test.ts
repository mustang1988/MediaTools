import { describe, it } from 'mocha';
import assert from 'assert';
import { OptionFactory } from '../../src/option/OptionFactory';
import { EnumPrintFormat } from '../../src/enumeration/EnumPrintFormat';
import { MediaParser } from '../../src/media/MediaParser';
import { Media } from '../../src/media/Media';
import { RatioOption } from '../../src/option/RatioOption';
import { Ratio } from '../../src/ratio/Ratio';

describe('OptionFactory.ts', () => {
    it('static CreateStringOption()', () => {
        const name = "name";
        const value = "value";
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateStringOption(name, value, priority, multiply, conflicts);
        assert.notDeepEqual(option, null);
    });

    it('static CreateStringOption() with default', () => {
        const name = "name";
        const value = "value";
        const option = OptionFactory.CreateStringOption(name, value);
        assert.notDeepEqual(option, null);
    });

    it('static CreateNumberOption()', () => {
        const name = "name";
        const value = 1;
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateNumberOption(name, value, priority, multiply, conflicts);
        assert.notDeepEqual(option, null);
    });

    it('static CreateNumberOption() with default', () => {
        const name = "name";
        const value = 1;
        const option = OptionFactory.CreateNumberOption(name, value);
        assert.notDeepEqual(option, null);
    });

    it('static CreateBooleanOption()', () => {
        const name = "name";
        const value = false;
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateBooleanOption(name, value, priority, multiply, conflicts);
        assert.notDeepEqual(option, null);
    });

    it('static CreateBooleanOption() with default', () => {
        const name = "name";
        const value = false;
        const option = OptionFactory.CreateBooleanOption(name, value);
        assert.notDeepEqual(option, null);
    });

    it('static CreateRatioOption()', () => {
        const name = "name";
        const value = '24000/1001';
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateRatioOption(name, value, priority, multiply, conflicts);
        assert.notDeepEqual(option, null);
    });

    it('static CreateRatioOption() invalid value', () => {
        const name = "name";
        const value = '24000x1001';
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateRatioOption(name, value, priority, multiply, conflicts);
        assert.deepEqual(option, null);
    });

    it('static CreateRatioOption() with default', () => {
        const name = "name";
        const value = '24000/1001';
        const option = OptionFactory.CreateRatioOption(name, value);
        assert.notDeepEqual(option, null);
    });

    it('static CreateEnumOption()', () => {
        const name = "name";
        const value = EnumPrintFormat.JSON;
        const priority = 1;
        const multiply = true;
        const conflicts = ["name"];
        const option = OptionFactory.CreateEnumOption<EnumPrintFormat>(name, value, priority, multiply, conflicts);
        assert.notDeepEqual(option, null);
    });

    it('static CreateEnumOption() with default', () => {
        const name = "name";
        const value = EnumPrintFormat.JSON;
        const option = OptionFactory.CreateEnumOption<EnumPrintFormat>(name, value);
        assert.notDeepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption()', () => {
        const metadata = JSON.parse(`{
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
        }`)
        const media = new Media(metadata);
        const option = OptionFactory.CreateAudioBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption() mono layout', () => {
        const metadata = JSON.parse(`{
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
                    "channel_layout": "mono",
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
        }`)
        const media = new Media(metadata);
        const option = OptionFactory.CreateAudioBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption() 5.1 layout', () => {
        const metadata = JSON.parse(`{
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
                    "channel_layout": "5.1",
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
        }`)
        const media = new Media(metadata);
        const option = OptionFactory.CreateAudioBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption() no layout given', () => {
        const metadata = JSON.parse(`{
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
        }`)
        const media = new Media(metadata);
        const option = OptionFactory.CreateAudioBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption() no audio', () => {
        const metadata = JSON.parse(`{
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
        }`)
        const media = new Media(metadata);
        const option = OptionFactory.CreateAudioBitRateLimitOption(media);
        assert.deepEqual(option, null);
    });

    it('static CreateAudioBitRateLimitOption() no media', () => {
        const option = OptionFactory.CreateAudioBitRateLimitOption();
        assert.deepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption()', () => {
        const media = MediaParser.ReadFromFileSync('E:\\视频文件\\HDR视频文件\\Swordsmith.mp4');
        const target_fps = new RatioOption('-r', new Ratio(30000, 1001));
        const option = OptionFactory.CreateVideoBitRateLimitOption(media, target_fps);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option?.getValue(), 44000000);// 4k 29.97 hdr
    });

    it('static CreateVideoBitRateLimitOption() no media and target fps', () => {
        const option = OptionFactory.CreateVideoBitRateLimitOption();
        assert.deepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() no video stream', () => {
        const metadata = JSON.parse(`{
            "streams": [
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.deepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() no video frame rate', () => {
        const metadata = JSON.parse(`{
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.deepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() no video width or height', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.deepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 360p high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":480,
                    "height":360,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 480p high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":720,
                    "height":480,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 720p sdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1280,
                    "height":720,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 720p hdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1280,
                    "height":720,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1080p sdr high fps', () => {
        const metadata = JSON.parse(`{
        "streams": [
            {
                "index": 0,
                "codec_name": "hevc",
                "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                "profile": "Main 10",
                "codec_type": "video",
                "codec_tag_string": "hvc1",
                "codec_tag": "0x31637668",
                "width":1920,
                "height":1080,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1080p hdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1920,
                    "height":1080,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1440p sdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":2560,
                    "height":1440,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1440p hdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":2560,
                    "height":1440,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 2160p sdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":3840,
                    "height":2160,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 2160p hdr high fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":3840,
                    "height":2160,
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 360p low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":480,
                    "height":360,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 480p low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":720,
                    "height":480,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 720p sdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1280,
                    "height":720,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 720p hdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1280,
                    "height":720,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1080p sdr low fps', () => {
        const metadata = JSON.parse(`{
        "streams": [
            {
                "index": 0,
                "codec_name": "hevc",
                "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                "profile": "Main 10",
                "codec_type": "video",
                "codec_tag_string": "hvc1",
                "codec_tag": "0x31637668",
                "width":1920,
                "height":1080,
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
                "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1080p hdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":1920,
                    "height":1080,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1440p sdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":2560,
                    "height":1440,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 1440p hdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":2560,
                    "height":1440,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 2160p sdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":3840,
                    "height":2160,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateVideoBitRateLimitOption() 2160p hdr low fps', () => {
        const metadata = JSON.parse(`{
            "streams": [
                {
                    "index": 0,
                    "codec_name": "hevc",
                    "codec_long_name": "H.265 / HEVC (High Efficiency Video Coding)",
                    "profile": "Main 10",
                    "codec_type": "video",
                    "codec_tag_string": "hvc1",
                    "codec_tag": "0x31637668",
                    "width":3840,
                    "height":2160,
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
                    "r_frame_rate": "30000/1001",
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
        const media = new Media(metadata);
        const option = OptionFactory.CreateVideoBitRateLimitOption(media);
        assert.notDeepEqual(option, null);
    });

    it('static CreateHDRToSDROption()', () => { });

    it('static CreateHDRToSDROption() with default', () => { });

});
