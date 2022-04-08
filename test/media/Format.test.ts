import { describe, it } from 'mocha';
import assert from 'assert';
import { Format } from '../../src/media/Format';
import _ from 'lodash';

const normal_data = JSON.parse(`{
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
}`);

const empty_data = JSON.parse('{}');

describe('Format.ts', () => {
    it('constructor()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
    });

    it('getFilename()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFilename()?.getValue(), _.get(normal_data, 'filename', null));
    });
    it('getFilename() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFilename()?.getValue(), _.get(empty_data, 'filename', null));
    });

    it('getNBStreams()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBStreams()?.getValue(), _.get(normal_data, 'nb_streams', null));
    });
    it('getNBStreams() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBStreams()?.getValue(), _.get(empty_data, 'nb_streams', null));
    });

    it('getNBPrograms()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBPrograms()?.getValue(), _.get(normal_data, 'nb_programs', null));
    });
    it('getNBPrograms()', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getNBPrograms()?.getValue(), _.get(empty_data, 'nb_programs', null));
    });

    it('getFormatName()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatName()?.getValue(), _.get(normal_data, 'format_name', null));
    });
    it('getFormatName() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatName()?.getValue(), _.get(empty_data, 'format_name', null));
    });

    it('getFormatLongName()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatLongName()?.getValue(), _.get(normal_data, 'format_long_name', null));
    });
    it('getFormatLongName() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getFormatLongName()?.getValue(), _.get(empty_data, 'format_long_name', null));
    });

    it('getStartTime()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getStartTime()?.getValue(), _.get(normal_data, 'start_time', null));
    });
    it('getStartTime() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getStartTime()?.getValue(), _.get(empty_data, 'start_time', null));
    });

    it('getDuration()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getDuration()?.getValue(), _.get(normal_data, 'duration', null));
    });
    it('getDuration() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getDuration()?.getValue(), _.get(empty_data, 'duration', null));
    });

    it('getSize()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getSize()?.getValue(), _.get(normal_data, 'size', null));
    });
    it('getSize() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getSize()?.getValue(), _.get(empty_data, 'size', null));
    });

    it('getBitRate()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getBitRate()?.getValue(), _.get(normal_data, 'bit_rate', null));
    });
    it('getBitRate() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getBitRate()?.getValue(), _.get(empty_data, 'bit_rate', null));
    });

    it('getProbeScore()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getProbeScore()?.getValue(), _.get(normal_data, 'probe_score', null));
    });
    it('getProbeScore() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getProbeScore()?.getValue(), _.get(empty_data, 'probe_score', null));
    });

    it('getTags()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getTags()?.getValue(), _.get(normal_data, 'tags', null));
    });
    it('getTags() not given', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.getTags()?.getValue(), _.get(empty_data, 'tags', null));
    });

    it('hasFilename()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFilename(), true);
    });
    it('hasFilename() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFilename(), false);
    });

    it('hasNBStreams()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBStreams(), true);
    });
    it('hasNBStreams() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBStreams(), false);
    });

    it('hasNBPrograms()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBPrograms(), true);
    });
    it('hasNBPrograms() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasNBPrograms(), false);
    });

    it('hasFormatName()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatName(), true);
    });
    it('hasFormatName() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatName(), false);
    });

    it('hasFormatLongName()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatLongName(), true);
    });
    it('hasFormatLongName() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasFormatLongName(), false);
    });

    it('hasStartTime()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasStartTime(), true);
    });
    it('hasStartTime() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasStartTime(), false);
    });

    it('hasDuration()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasDuration(), true);
    });
    it('hasDuration() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasDuration(), false);
    });

    it('hasSize()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasSize(), true);
    });
    it('hasSize() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasSize(), false);
    });

    it('hasBitRate()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasBitRate(), true);
    });
    it('hasBitRate() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasBitRate(), false);
    });

    it('hasProbeScore()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasProbeScore(), true);
    });
    it('hasProbeScore() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasProbeScore(), false);
    });

    it('hasTags()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasTags(), true);
    });
    it('hasTags() false', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.deepEqual(format.hasTags(), false);
    });

    it('toObject()', () => {
        const format = new Format(normal_data);
        assert.notDeepEqual(format, null);
        assert.notDeepEqual(format.toObject(), null);
        assert.notDeepEqual(format.toObject(), {});
    });
    it('toObject() empty', () => {
        const format = new Format(empty_data);
        assert.notDeepEqual(format, null);
        assert.notDeepEqual(format.toObject(), null);
        assert.notDeepEqual(format.toObject(), {});
    });
});