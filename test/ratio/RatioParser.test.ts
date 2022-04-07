import { describe, it } from 'mocha';
import assert from 'assert';
import { RatioParser } from '../../src/ratio/RatioParser';

describe('RatioParser.ts', () => {
    it('static ParseFromString() null input', () => {
        const ratio = RatioParser.ParseFromString(null)
        assert.deepEqual(ratio, null);
    });

    it('static ParseFromString() not null input', () => {
        const string_ratio = '30000/1001';
        const ratio = RatioParser.ParseFromString(string_ratio)
        assert.notDeepEqual(ratio, null);
    });

    it('static ParseFromString() invalid input', () => {
        const string_ratio = '30000?'; // after split by seperator, there is only one part
        const ratio = RatioParser.ParseFromString(string_ratio)
        assert.deepEqual(ratio, null);
    });

    it('static ParseFromString() invalid input', () => {
        const string_ratio = '30000/abc'; // after split by seperator, some part can not parse to number
        const ratio = RatioParser.ParseFromString(string_ratio)
        assert.deepEqual(ratio, null);
    });

    it('static ParseFromString() not input with seperator', () => {
        const string_ratio = '30000?1001';
        const ratio = RatioParser.ParseFromString(string_ratio, "?")
        assert.notDeepEqual(ratio, null);
    });
});