export interface IRatio {
    toNumber(fix?: number): number;

    toString(): string;

    isGreaterThan(num: number): boolean;

    isValid(): boolean;
}