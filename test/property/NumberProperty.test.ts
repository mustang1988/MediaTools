import { describe, it } from 'mocha';
import assert from 'assert';
import { NumberProperty } from '../../src/property/NumberProperty';

describe('NumberProperty.ts', () => {
    it('constructor()', () => {
        const value = 1;
        const property = new NumberProperty(value);
        assert.notDeepEqual(property, null);
    });
});