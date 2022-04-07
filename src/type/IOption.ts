export interface IOption<T> {
    getName(): string;
    
    getValue(): T;

    getPriority(): number;

    isMultiple(): boolean;

    getConflicts(): string[];

    validate(): boolean;

    toString(): string;

    toArray(): string[];
}