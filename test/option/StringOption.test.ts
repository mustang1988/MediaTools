import { describe, it } from 'mocha';
import assert from 'assert';
import { StringOption } from '../../src/option/StringOption';

describe('StringOption.ts', () => {
    it('constructor() with default args', () => {
        const option = new StringOption("name");
        assert.notDeepEqual(option, null);
    });

    it('constructor() without default args', () => {
        const value = "test";
        const option = new StringOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
    });

    it('validate() true', () => {
        const value = "test";
        const option = new StringOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), true);
    });

    it('validate() false', () => {
        const option = new StringOption("name");
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), false);
    });

    it('toString()', () => {
        const name = "name";
        const value = "test";
        const option = new StringOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), `${name} ${value}`);
    });

    it('toString() validate failed', () => {
        const option = new StringOption("name");
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), '');
    });
});