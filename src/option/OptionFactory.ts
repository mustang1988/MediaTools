import _ from "lodash";
import { RatioParser } from "../ratio/RatioParser";
import { IMedia } from "../type/media/IMedia";
import { BooleanOption } from "./BooleanOption";
import { EnumOption } from "./EnumOption";
import { NumberOption } from "./NumberOption";
import { RatioOption } from "./RatioOption";
import { StringOption } from "./StringOption";

export class OptionFactory {
    /**
     * Create a string option.
     * @param name {string} option name.
     * @param value {string} option value.
     * @param priority {number} option priority, default 0.
     * @param multiple {boolean} is option multiple, default false.
     * @param conflicts {string[]} option conflicts, default [].
     * @returns {StringOption}
     */
    static CreateStringOption(
        name: string,
        value: string,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): StringOption {
        return new StringOption(name, value, priority, multiple, conflicts);
    }

    /**
     * Create a number option.
     * @param name {string} option name.
     * @param value {number} option value.
     * @param priority {number} option priority, default 0.
     * @param multiple {boolean} is option multiple, default false.
     * @param conflicts {string[]} option conflicts, default [].
     * @returns {CreateNumberOption}
     */
    static CreateNumberOption(
        name: string,
        value: number,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[],
        min?: number,
        max?: number
    ): NumberOption {
        return new NumberOption(name, value, priority, multiple, conflicts, min, max);
    }

    /**
     * Create a boolean option.
     * @param name {string} option name.
     * @param value {boolean} option value, default false.
     * @param priority {number} option priority, default 0.
     * @param multiple {boolean} is option multiple, default false.
     * @param conflicts {string[]} option conflicts, default [].
     * @returns {BooleanOption}
     */
    static CreateBooleanOption(
        name: string,
        value?: boolean,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): BooleanOption {
        return new BooleanOption(name, value, priority, multiple, conflicts);
    }

    /**
     * Create a ratio option.
     * If the value is failed parse to ratio, return null.
     * @param name {string} option name.
     * @param value {string} option value.
     * @param priority {number} option priority, default 0.
     * @param multiple {boolean} is option multiple, default false.
     * @param conflicts {string[]} option conflicts, default [].
     * @returns {RatioOption | null}
     */
    static CreateRatioOption(
        name: string,
        value: string,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): RatioOption | null {
        const v = RatioParser.ParseFromString(value);
        return _.isNil(v) ? null : new RatioOption(name, v, priority, multiple, conflicts);
    }

    /**
     * Create a enum option.
     * @param name {string} option name.
     * @param value {T} option value.
     * @param priority {number} option priority, default 0.
     * @param multiple {boolean} is option multiple, default false.
     * @param conflicts {string[]} option conflicts, default [].
     * @returns {EnumOption<T>}
     */
    static CreateEnumOption<T>(
        name: string,
        value: T,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): EnumOption<T> {
        return new EnumOption(name, value, priority, multiple, conflicts);
    }

    /**
     * Create a audio bit rate limit option by standar present by Google in YouTube.
     * @link https://support.google.com/youtube/answer/1722171#zippy=%2Cbitrate
     * @param media {IMedia | null} media to limit audio bit rate.
     * @returns {NumberOption | null}
     */
    static CreateAudioBitRateLimitOption(media?: IMedia | null): NumberOption | null {
        if (!_.isNil(media) && media.hasAudioStream()) {
            const channel_layout = media.getAudioStream()?.getChannelLayout()?.getValue();
            switch (channel_layout) {
                case "mono":
                    return OptionFactory.CreateNumberOption('-b:a', 128000, 5.2);
                case "stereo":
                    return OptionFactory.CreateNumberOption('-b:a', 384000, 5.2);
                case "5.1":
                    return OptionFactory.CreateNumberOption('-b:a', 512000, 5.2);
                default:
                    return OptionFactory.CreateNumberOption('-b:a', 384000, 5.2);
            }
        }
        return null;
    }

    /**
     * Create a video bit rate limit option by standar present by Google in YouTube.
     * @link https://support.google.com/youtube/answer/1722171#zippy=%2Cbitrate
     * @param media {IMedia | null} media to limit video bit rate.
     * @param target_frame_rate {RatioOption|undefined} transcode target frame rate option.
     * @returns {NumberOption | null}
     */
    static CreateVideoBitRateLimitOption(
        media?: IMedia | null,
        target_frame_rate?: RatioOption
    ): NumberOption | null {
        if (!_.isNil(media) && media.hasVideoStream()) {
            const frame_rate = !_.isNil(target_frame_rate)
                ? target_frame_rate.getValue()
                : media.getVideoStream()?.getRFrameRate()?.getValue();
            const width = media.getVideoStream()?.getWidth()?.getValue();
            const height = media.getVideoStream()?.getHeight()?.getValue();
            if (!_.isNil(frame_rate) && !_.isNil(width) && !_.isNil(height)) {
                const is_high_frame_rate: boolean = frame_rate.isGreaterThan(30);
                const is_hdr = media.isHDR();
                const size_key = Math.min(width, height)
                let bit_rate = 0;
                if (size_key < 480) {
                    // 360p
                    bit_rate = is_high_frame_rate ? 1.5 : 1;
                } else if (size_key >= 480 && size_key < 720) {
                    // 480p
                    bit_rate = is_high_frame_rate ? 4 : 2.5;
                } else if (size_key >= 720 && size_key < 1080) {
                    // 720p
                    bit_rate = is_high_frame_rate
                        ? is_hdr
                            ? 9.5
                            : 7.5
                        : is_hdr
                            ? 6.5
                            : 5;
                } else if (size_key >= 1080 && size_key < 1440) {
                    // 1080p
                    bit_rate = is_high_frame_rate
                        ? is_hdr
                            ? 15
                            : 12
                        : is_hdr
                            ? 10
                            : 8;
                } else if (size_key >= 1440 && size_key < 2160) {
                    // 1440p
                    bit_rate = is_high_frame_rate
                        ? is_hdr
                            ? 30
                            : 24
                        : is_hdr
                            ? 20
                            : 16;
                } else {
                    // 4k or higher
                    bit_rate = is_high_frame_rate
                        ? is_hdr
                            ? 66
                            : 53
                        : is_hdr
                            ? 44
                            : 35;
                }
                return OptionFactory.CreateNumberOption('-b:v', bit_rate * 1000000, 4.9);
            }
            return null;
        }
        return null;
    }

    // static CreateHDRToSDROption(media?: IMedia | null): IOption<any>[] {
    //     if (!_.isNil(media) && media.isHDR()) {
    //         // TODO
    //     }
    //     return [];
    // }
}