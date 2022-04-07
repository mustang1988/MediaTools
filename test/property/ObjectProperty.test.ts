import { describe, it } from 'mocha';
import assert from 'assert';
import { ObjectProperty } from '../../src/property/ObjectProperty';

describe('ObjectProperty.ts', () => {
    it('constructor()', () => {
        const value = { name: 'test' };
        const property = new ObjectProperty(value);
        assert.notDeepEqual(property, null);
    });
});