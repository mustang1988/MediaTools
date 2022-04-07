import { describe, it } from 'mocha';
import assert from 'assert';
import { RatioProperty } from '../../src/property/RatioProperty';
import { Ratio } from '../../src/ratio/Ratio';

describe('RatioProperty.ts', () => {
    it('constructor()', () => {
        const value = new Ratio(0, 0);
        const property = new RatioProperty(value);
        assert.notDeepEqual(property, null);
    });
});