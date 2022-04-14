export interface IRatio {
    /**
     * Get the ratio as a number.
     * @param fix {number} number of decimal places to round to, default is 2
     * @returns {number}
     */
    toNumber(fix?: number): number;

    /**
     * Get the ratio as a string.
     * @returns {string}
     */
    toString(): string;

    /**
     * Check whether the ratio as number is greater than another number.
     * @param num {number} number value to compare
     * @returns {boolean}
     */
    isGreaterThan(num: number): boolean;

    /**
     * Check the ratio object is a valid ratio.
     * Infinite or negative value is considered invalid
     * @returns {boolean}
     */
    isValid(): boolean;
}