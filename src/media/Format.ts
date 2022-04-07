import _ from "lodash";
import { PropertyFactory } from "../property/PropertyFactory";
import { IProperty } from "../type/IProperty";
import { IFormat } from "../type/media/IFormat";

export class Format implements IFormat {
    filename: IProperty<string> | null;
    nb_streams: IProperty<number> | null;
    nb_programs: IProperty<number> | null;
    format_name: IProperty<string> | null;
    format_long_name: IProperty<string> | null;
    start_time: IProperty<number> | null;
    duration: IProperty<number> | null;
    size: IProperty<number> | null;
    bit_rate: IProperty<number> | null;
    probe_score: IProperty<number> | null;
    tags: IProperty<object> | null;

    constructor(metadata: JSON) {
        this.filename = PropertyFactory.CreateStringProperty(_.get(metadata, 'filename', null));
        this.nb_streams = PropertyFactory.CreateNumberProperty(_.get(metadata, 'nb_streams', null));
        this.nb_programs = PropertyFactory.CreateNumberProperty(_.get(metadata, 'nb_programs', null));
        this.format_name = PropertyFactory.CreateStringProperty(_.get(metadata, 'format_name', null));
        this.format_long_name = PropertyFactory.CreateStringProperty(_.get(metadata, 'format_long_name', null));
        this.start_time = PropertyFactory.CreateNumberProperty(_.get(metadata, 'start_time', null));
        this.duration = PropertyFactory.CreateNumberProperty(_.get(metadata, 'duration', null));
        this.size = PropertyFactory.CreateNumberProperty(_.get(metadata, 'size', null));
        this.bit_rate = PropertyFactory.CreateNumberProperty(_.get(metadata, 'bit_rate', null));
        this.probe_score = PropertyFactory.CreateNumberProperty(_.get(metadata, 'probe_score', null));
        this.tags = PropertyFactory.CreateObjectProperty(_.get(metadata, 'tags', null));
    }
    
    getFilename(): IProperty<string> | null {
        return this.filename;
    }

    getNBStreams(): IProperty<number> | null {
        return this.nb_streams;
    }

    getNBPrograms(): IProperty<number> | null {
        return this.nb_programs;
    }

    getFormatName(): IProperty<string> | null {
        return this.format_name;
    }

    getFormatLongName(): IProperty<string> | null {
        return this.format_long_name;
    }

    getStartTime(): IProperty<number> | null {
        return this.start_time;
    }

    getDuration(): IProperty<number> | null {
        return this.duration;
    }

    getSize(): IProperty<number> | null {
        return this.size;
    }

    getBitRate(): IProperty<number> | null {
        return this.bit_rate;
    }

    getProbeScore(): IProperty<number> | null {
        return this.probe_score;
    }

    getTags(): IProperty<object> | null {
        return this.tags;
    }

    hasFilename(): boolean {
        return !_.isNull(this.filename);
    }

    hasNBStreams(): boolean {
        return !_.isNull(this.nb_streams);
    }

    hasNBPrograms(): boolean {
        return !_.isNull(this.nb_programs);
    }

    hasFormatName(): boolean {
        return !_.isNull(this.format_name);
    }

    hasFormatLongName(): boolean {
        return !_.isNull(this.format_long_name);
    }

    hasStartTime(): boolean {
        return !_.isNull(this.start_time);
    }

    hasDuration(): boolean {
        return !_.isNull(this.duration);
    }

    hasSize(): boolean {
        return !_.isNull(this.size);
    }

    hasBitRate(): boolean {
        return !_.isNull(this.bit_rate);
    }

    hasProbeScore(): boolean {
        return !_.isNull(this.probe_score);
    }

    hasTags(): boolean {
        return !_.isNull(this.tags);
    }

    toObject(): object {
        const result = {};
        for (const key of Object.keys(this)) {
            const value: IProperty<any> = _.get(this, key);
            _.set(
                result,
                key,
                _.isNil(value)
                    ? null
                    : value.isRatio()
                        ? value.getValue().toString()
                        : value.getValue()
            );
        }
        return result;
    }
}