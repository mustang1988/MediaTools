import _ from "lodash";
import { COMMAND_SEPERATOR } from "../type/Constants";
import { IOption } from "../type/IOption";

export abstract class Option<T> implements IOption<T>{
    _name: string;
    _value: T | null;
    _priority: number;
    _multiple: boolean;
    _conflicts: string[];

    constructor(name: string, value?: T, priority?: number, multiple?: boolean, conflicts?: string[]) {
        this._name = name;
        this._value = _.isUndefined(value) ? null : value;
        this._priority = _.isUndefined(priority) ? 0 : priority;
        this._multiple = _.isUndefined(multiple) ? false : multiple;
        this._conflicts = _.isUndefined(conflicts) ? [] : conflicts;
    }

    getName(): string {
        return this._name;
    }

    getValue(): T | null {
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
        return _.compact(this.toString().split(COMMAND_SEPERATOR));
    }

    abstract validate(): boolean;

    abstract toString(): string;
}