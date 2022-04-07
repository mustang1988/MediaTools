import { describe, it } from 'mocha';
import assert from 'assert';
import { Format } from '../../src/media/Format';
import _ from 'lodash';

const normal_data = `{
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
}`

const empty_data = `{}`

describe('Format.ts', () => {
    it('constructor()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
    });

    it('getFilename()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFilename()?.getValue(), _.get(metadata, 'filename', null));
    });
    it('getFilename() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFilename()?.getValue(), _.get(metadata, 'filename', null));
    });

    it('getNBStreams()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBStreams()?.getValue(), _.get(metadata, 'nb_streams', null));
    });
    it('getNBStreams() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBStreams()?.getValue(), _.get(metadata, 'nb_streams', null));
    });

    it('getNBPrograms()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBPrograms()?.getValue(), _.get(metadata, 'nb_programs', null));
    });
    it('getNBPrograms()', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBPrograms()?.getValue(), _.get(metadata, 'nb_programs', null));
    });

    it('getFormatName()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatName()?.getValue(), _.get(metadata, 'format_name', null));
    });
    it('getFormatName() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatName()?.getValue(), _.get(metadata, 'format_name', null));
    });

    it('getFormatLongName()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatLongName()?.getValue(), _.get(metadata, 'format_long_name', null));
    });
    it('getFormatLongName() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatLongName()?.getValue(), _.get(metadata, 'format_long_name', null));
    });

    it('getStartTime()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getStartTime()?.getValue(), _.get(metadata, 'start_time', null));
    });
    it('getStartTime() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getStartTime()?.getValue(), _.get(metadata, 'start_time', null));
    });

    it('getDuration()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getDuration()?.getValue(), _.get(metadata, 'duration', null));
    });
    it('getDuration() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getDuration()?.getValue(), _.get(metadata, 'duration', null));
    });

    it('getSize()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getSize()?.getValue(), _.get(metadata, 'size', null));
    });
    it('getSize() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getSize()?.getValue(), _.get(metadata, 'size', null));
    });

    it('getBitRate()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getBitRate()?.getValue(), _.get(metadata, 'bit_rate', null));
    });
    it('getBitRate() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getBitRate()?.getValue(), _.get(metadata, 'bit_rate', null));
    });

    it('getProbeScore()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getProbeScore()?.getValue(), _.get(metadata, 'probe_score', null));
    });
    it('getProbeScore() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getProbeScore()?.getValue(), _.get(metadata, 'probe_score', null));
    });

    it('getTags()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getTags()?.getValue(), _.get(metadata, 'tags', null));
    });
    it('getTags() not given', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getTags()?.getValue(), _.get(metadata, 'tags', null));
    });

    it('hasFilename()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFilename(), true);
    });
    it('hasFilename() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFilename(), false);
    });

    it('hasNBStreams()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBStreams(), true);
    });
    it('hasNBStreams() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBStreams(), false);
    });

    it('hasNBPrograms()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBPrograms(), true);
    });
    it('hasNBPrograms() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBPrograms(), false);
    });

    it('hasFormatName()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatName(), true);
    });
    it('hasFormatName() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatName(), false);
    });

    it('hasFormatLongName()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatLongName(), true);
    });
    it('hasFormatLongName() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatLongName(), false);
    });

    it('hasStartTime()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasStartTime(), true);
    });
    it('hasStartTime() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasStartTime(), false);
    });

    it('hasDuration()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasDuration(), true);
    });
    it('hasDuration() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasDuration(), false);
    });

    it('hasSize()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasSize(), true);
    });
    it('hasSize() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasSize(), false);
    });

    it('hasBitRate()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasBitRate(), true);
    });
    it('hasBitRate() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasBitRate(), false);
    });

    it('hasProbeScore()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasProbeScore(), true);
    });
    it('hasProbeScore() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasProbeScore(), false);
    });

    it('hasTags()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasTags(), true);
    });
    it('hasTags() false', () => {
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasTags(), false);
    });

    it('toObject()', () => {
        const metadata = JSON.parse(normal_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.notDeepEqual(format.toObject(), null);
        assert.notDeepEqual(format.toObject(), {});
    });
    it('toObject() empty', () => { 
        const metadata = JSON.parse(empty_data);
        const format = new Format(metadata);
        assert.notDeepEqual(format, null);
        assert.notDeepEqual(format.toObject(), null);
        assert.notDeepEqual(format.toObject(), {});
    });
});