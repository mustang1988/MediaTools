import _ = require("lodash");
import { IRatio } from "../type/IRatio";

export class Ratio implements IRatio {
    _dividend: number;
    _divisor: number;
    _separator: string;

    constructor(dividend: number, divisor: number, separator?: string) {
        this._dividend = dividend;
        this._divisor = divisor;
        this._separator = _.isUndefined(separator) ? '/' : separator;
    }

    toNumber(fix?: number): number {
        if (this._divisor === 0) {
            return 0;
        }
        const result = this._dividend / this._divisor;
        fix = _.isUndefined(fix) ? 2 : fix;
        return parseFloat(result.toFixed(fix));

    }
    
    toString(): string {
        return `${this._dividend}${this._separator}${this._divisor}`;
    }
}