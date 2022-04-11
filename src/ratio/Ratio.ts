import _ = require("lodash");
import { RATIO_SEPERATOR_SLASH } from "../type/Constants";
import { IRatio } from "../type/IRatio";

/* The Ratio class is a simple class that represents a ratio of two numbers */
export class Ratio implements IRatio {
    _dividend: number;
    _divisor: number;
    _separator: string;

    constructor(dividend: number, divisor: number, separator?: string) {
        this._dividend = dividend;
        this._divisor = divisor;
        this._separator = _.isUndefined(separator) ? RATIO_SEPERATOR_SLASH : separator;
    }

    /**
     * Get the ratio as a number.
     * @param fix {number} number of decimal places to round to, default is 2
     * @returns {number}
     */
    toNumber(fix?: number): number {
        if (!this.isValid()) {
            return 0;
        }
        const result = this._dividend / this._divisor;
        fix = _.isUndefined(fix) ? 2 : fix;
        return parseFloat(result.toFixed(fix));

    }

    /**
     * Get the ratio as a string.
     * @returns {string}
     */
    toString(): string {
        return this.isValid()
            ? `${this._dividend}${this._separator}${this._divisor}`
            : "";
    }

    /**
     * Check whether the ratio as number is greater than another number.
     * @param num {number} number value to compare
     * @returns {boolean}
     */
    isGreaterThan(num: number): boolean {
        return this.toNumber() > num;
    }

    /**
     * Check the ratio object is a valid ratio.
     * Infinite or negative value is considered invalid
     * @returns {boolean}
     */
    isValid() {
        return this._divisor != 0 && this.toNumber() >= 0;
    }
}