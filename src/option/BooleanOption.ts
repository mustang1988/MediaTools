import _ from "lodash";
import { Option } from "./Option";

export class BooleanOption extends Option<boolean>{
    constructor(name: string, value?: boolean, priority?: number, multiple?: boolean, conflicts?: string[]) {
        value = _.isUndefined(value) ? false : value;
        super(name, value, priority, multiple, conflicts);
    }

    validate(): boolean {
        return true;
    }
    
    toString(): string {
        return this._value
            ? this._name
            : '';
    }
}