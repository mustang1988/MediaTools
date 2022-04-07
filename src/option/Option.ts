import _ from "lodash";
import { IOption } from "../type/IOption";

export abstract class Option<T> implements IOption<T>{
    _name: string;
    _value: T;
    _priority: number;
    _multiple: boolean;
    _conflicts: string[];

    constructor(name: string, value: T, priority?: number, multiple?: boolean, conflicts?: string[]) {
        this._name = name;
        this._value = value;
        this._priority = _.isUndefined(priority) ? 0 : priority;
        this._multiple = _.isUndefined(multiple) ? false : multiple;
        this._conflicts = _.isUndefined(conflicts) ? [] : conflicts;
    }

    getName(): string {
        return this._name;
    }
    
    getValue(): T {
        return this._value;
    }

    getPriority(): number {
        return this._priority;
    }

    isMultiple(): boolean {
        return this._multiple;
    }

    getConflicts(): string[] {
        return this._conflicts;
    }

    toArray(): string[] {
        return this.toString().split(' ');
    }

    abstract validate(): boolean;

    abstract toString(): string;
}