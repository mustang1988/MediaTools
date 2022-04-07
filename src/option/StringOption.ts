import _ from "lodash";
import { Option } from "./Option";

export class StringOption extends Option<string> {
    constructor(name: string, value: string, priority?: number, multiple?: boolean, conflicts?: string[]) {
        super(name, value, priority, multiple, conflicts);
    }

    validate(): boolean {
        return !_.isNil(this._value);
    }
    
    toString(): string {
        return `${this._name} ${this._value}`;
    }
}