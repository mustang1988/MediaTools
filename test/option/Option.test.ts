import { describe, it } from 'mocha';
import assert from 'assert';
import { StringOption } from '../../src/option/StringOption';

describe('StringOption.ts', () => {
    it('getName()', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.getName(), name)
    });

    it('getValue()', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.getValue(), value)
    });

    it('getPriority()', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.getPriority(), priority)
    });

    it('isMultiple()', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.isMultiple(), multiple)
    });

    it('getConflicts()', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.getConflicts(), conflicts)
    });

    it('toArray() validate true', () => {
        const name = "name";
        const value = "test";
        const priority = 1;
        const multiple = false;
        const conflicts: string[] = [];
        const option = new StringOption(name, value, priority, multiple, conflicts);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toArray(), [name, value])
    });

    it('toArray() validate true', () => {
        const name = "name";
        const option = new StringOption(name);
        assert.notDeepEqual(option, null);
        assert.deepEqual(option.toArray(), [])
    });
});