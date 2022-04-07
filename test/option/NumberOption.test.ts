import { describe, it } from 'mocha';
import assert from 'assert';
import { NumberOption } from '../../src/option/NumberOption';

describe('NumberOption.ts', () => {
    it('constructor() with default args', () => {
        const value = 1;
        const option = new NumberOption("name", value);
        assert.notDeepEqual(option, null);
    });

    it('constructor() without default args', () => {
        const value = 2;
        const option = new NumberOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
    });

    it('validate() true', () => {
        const value = 3;
        const option = new NumberOption("name", value, 1, false, [], 0, 10);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), true);
    });

    it('validate() false', () => {
        const value = 11;
        const option = new NumberOption("name", value, 1, false, [], 0, 10);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), false);
    });

    it('toString()', () => {
        const name = "name";
        const value = 4;
        const option = new NumberOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), `${name} ${value}`);
    });

    it('toString() validate false', () => {
        const name = "name";
        const value = 4;
        const option = new NumberOption(name, value, 1, false, [], 0, 3);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), '');
    });
});