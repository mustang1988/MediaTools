import { describe, it } from 'mocha';
import assert from 'assert';
import { BooleanOption } from '../../src/option/BooleanOption';

describe('BooleanOption.ts', () => {
    it('constructor() with default args', () => {
        const option = new BooleanOption("name");
        assert.notDeepEqual(option, null);
    });

    it('constructor() without default args', () => {
        const value = true;
        const option = new BooleanOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
    });

    it('validate()', () => {
        const value = true;
        const option = new BooleanOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), true);
    });

    it('toString() value is true', () => {
        const name = "name";
        const value = true;
        const option = new BooleanOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), name);
    });

    it('toString() value is false', () => {
        const name = "name";
        const value = false;
        const option = new BooleanOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), "");
    });
});