import { describe, it } from 'mocha';
import assert from 'assert';
import { RatioOption } from '../../src/option/RatioOption';
import { Ratio } from '../../src/ratio/Ratio';

describe('RatioOption.ts', () => {
    it('constructor() with default args', () => {
        const value = new Ratio(0, 0);
        const option = new RatioOption("name", value);
        assert.notDeepEqual(option, null);
    });

    it('constructor() without default args', () => {
        const value = new Ratio(0, 0);
        const option = new RatioOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
    });

    it('validate() true', () => {
        const value = new Ratio(0, 0);
        const option = new RatioOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), true);
    });

    it('validate() false', () => {
        const option = new RatioOption("name");
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), false);
    });

    it('toString()', () => {
        const name = "name";
        const value = new Ratio(0, 0);
        const option = new RatioOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), `${name} ${value}`);
    });

    it('toString() validate failed', () => {
        const option = new RatioOption("name");
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), '');
    });
});