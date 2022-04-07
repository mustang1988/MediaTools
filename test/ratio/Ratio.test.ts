import { describe, it } from 'mocha';
import assert from 'assert';
import { Ratio } from '../../src/ratio/Ratio';

describe('Ratio.ts', () => {
    it('constructor(dividend,divisor)', () => {
        const ratio = new Ratio(30000, 1001);
        assert.notDeepEqual(ratio, null);
    });

    it('constructor(dividend,divisor,separator)', () => {
        const ratio = new Ratio(30000, 1001, ":");
        assert.notDeepEqual(ratio, null);
    });

    it('toNumber()', () => {
        const ratio = new Ratio(24000, 1001);
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(ratio.toNumber(), 23.98)
    });

    it('toNumber() divisor is 0', () => {
        const ratio = new Ratio(30000, 0);
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(ratio.toNumber(), 0)
    });

    it('toNumber(fixed)', () => {
        const ratio = new Ratio(24000, 1001);
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(ratio.toNumber(3), 23.976)
    });

    it('toString() default seperator', () => {
        const ratio = new Ratio(24000, 1001);
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(ratio.toString(), "24000/1001")
    });

    it('toString()', () => {
        const ratio = new Ratio(24000, 1001, ":");
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(ratio.toString(), "24000:1001")
    });
    
    it('isGreaterThan() return true', () => {
        const ratio = new Ratio(24000, 1001, ":");
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(true, ratio.isGreaterThan(20))
    });

    it('isGreaterThan() return false', () => {
        const ratio = new Ratio(24000, 1001, ":");
        assert.notDeepEqual(ratio, null);
        assert.deepEqual(false, ratio.isGreaterThan(30))
    });
});