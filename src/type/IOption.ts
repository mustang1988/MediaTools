export interface IOption<T> {
    getName(): string;

    getValue(): T | null;

    getPriority(): number;

    isMultiple(): boolean;

    getConflicts(): string[];

    validate(): boolean;

    toString(): string;

    toArray(): string[];
}