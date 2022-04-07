import { describe, it } from 'mocha';
import assert from 'assert';
import { EnumOption } from '../../src/option/EnumOption';
import { EnumVPXQuality } from '../../src/enumeration/EnumVPXQuality';

describe('EnumOption.ts', () => {
    it('constructor() with default args', () => {
        const value = EnumVPXQuality.BEST;
        const option = new EnumOption("name", value);
        assert.notDeepEqual(option, null);
    });

    it('constructor() without default args', () => {
        const value = EnumVPXQuality.BEST;
        const option = new EnumOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
    });

    it('validate()', () => {
        const value = EnumVPXQuality.BEST;
        const option = new EnumOption("name", value, 1, false, []);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.validate(), true);
    });

    it('toString()', () => {
        const name = "name";
        const value = EnumVPXQuality.BEST;
        const option = new EnumOption(name, value);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toString(), `${name} ${value}`);
    });
});