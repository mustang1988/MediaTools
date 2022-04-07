import { describe, it } from 'mocha';
import assert from 'assert';
import { Property } from '../../src/property/Property';
import { Ratio } from '../../src/ratio/Ratio';

describe('Property.ts', () => {
    it('constructor()', () => {
        const value = "test";
        const property = new Property<string>(value);
        assert.notDeepEqual(property, null);
    });

    it('getValue()', () => {
        const value = "test";
        const property = new Property<string>(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(property.getValue(), value);
    });

    it('isRatio() return true', () => {
        const value = new Ratio(0, 0);
        const property = new Property<Ratio>(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(true, property.isRatio());
    });

    it('isRatio() return false', () => {
        const value = "test";
        const property = new Property<string>(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(false, property.isRatio());
    });
});