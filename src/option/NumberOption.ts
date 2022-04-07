import _ from "lodash";
import { Option } from "./Option";

export class NumberOption extends Option<number>{
    _min: number;
    _max: number;

    constructor(name: string, value: number, priority?: number, multiple?: boolean, conflicts?: string[], min?: number, max?: number) {
        super(name, value, priority, multiple, conflicts);
        this._min = _.isUndefined(min) ? -Infinity : min;
        this._max = _.isUndefined(max) ? Infinity : max;
    }

    validate(): boolean {
        return this._value >= this._min && this._value <= this._max;
    }
    
    toString(): string {
        return this.validate() ? `${this._name} ${this._value}` : "";
    }
}