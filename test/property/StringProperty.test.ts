import { describe, it } from 'mocha';
import assert from 'assert';
import { StringProperty } from '../../src/property/StringProperty';

describe('RatioProperty.ts', () => {
    it('constructor()', () => {
        const value = "test";
        const property = new StringProperty(value);
        assert.notDeepEqual(property, null);
    });
});