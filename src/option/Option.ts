import _ from "lodash";
import { COMMAND_SEPERATOR } from "../type/Constants";
import { IOption } from "../type/IOption";

/**
 * Root super class for ffmpeg and ffprobe command line options.
 */
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

    /**
     * Get option name.
     * @returns {string}
     */
    getName(): string {
        return this._name;
    }

    /**
     * Get option value.
     * @returns {T}
     */
    getValue(): T | null {
        return this._value;
    }

    /**
     * Get option priority in command line.
     * The smaller the value, the higher the order
     * @returns {number}
     */
    getPriority(): number {
        return this._priority;
    }

    /**
     * Whether the option can be used multiple times in command line.
     * @returns {boolean}
     */
    isMultiple(): boolean {
        return this._multiple;
    }

    /**
     * Conflict option names list, if the option is used, the conflict options will be removed automatically.
     * @returns {string[]}
     */
    getConflicts(): string[] {
        return this._conflicts;
    }

    /**
     * Get option and value in a string array, name precedes the value.
     * @returns {string[]}
     */
    toArray(): string[] {
        return _.compact(this.toString().split(COMMAND_SEPERATOR));
    }

    abstract validate(): boolean;

    abstract toString(): string;
}