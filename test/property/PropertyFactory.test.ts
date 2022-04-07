import { describe, it } from 'mocha';
import assert from 'assert';
import { PropertyFactory } from '../../src/property/PropertyFactory';
import { StringProperty } from '../../src/property/StringProperty';
import { NumberProperty } from '../../src/property/NumberProperty';
import { RatioProperty } from '../../src/property/RatioProperty';
import { ObjectProperty } from '../../src/property/ObjectProperty';

describe('PropertyFactory.ts', () => {
    it('static CreateStringProperty(string)', () => {
        const value = "test";
        const property = PropertyFactory.CreateStringProperty(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(property instanceof StringProperty, true);
    });

    it('static CreateStringProperty(null)', () => {
        const value = null;
        const property = PropertyFactory.CreateStringProperty(value);
        assert.deepEqual(property, null);
    });

    it('static CreateNumberProperty(string)', () => {
        const value = "100";
        const property = PropertyFactory.CreateNumberProperty(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(property instanceof NumberProperty, true);
    });

    it('static CreateNumberProperty(null)', () => {
        const value = null;
        const property = PropertyFactory.CreateNumberProperty(value);
        assert.deepEqual(property, null);
    });

    it('static CreateRatioProperty(string)', () => {
        const value = "100/1";
        const property = PropertyFactory.CreateRatioProperty(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(property instanceof RatioProperty, true);
    });

    it('static CreateRatioProperty(null)', () => {
        const value = null;
        const property = PropertyFactory.CreateRatioProperty(value);
        assert.deepEqual(property, null);
    });

    it('static CreateObjectProperty(object)', () => {
        const value = { name: 'test' };
        const property = PropertyFactory.CreateObjectProperty(value);
        assert.notDeepEqual(property, null);
        assert.deepEqual(property instanceof ObjectProperty, true);
    });

    it('static CreateObjectProperty(null)', () => {
        const value = null;
        const property = PropertyFactory.CreateObjectProperty(value);
        assert.deepEqual(property, null);
    });
});