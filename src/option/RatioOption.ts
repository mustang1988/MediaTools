import _ from "lodash";
import { COMMAND_SEPERATOR } from "../type/Constants";
import { IRatio } from "../type/IRatio";
import { Option } from "./Option";

export class RatioOption extends Option<IRatio> {
    constructor(name: string, value?: IRatio, priority?: number, multiple?: boolean, conflicts?: string[]) {
        super(name, value, priority, multiple, conflicts);
    }

    validate(): boolean {
        return !_.isNil(this._value);
    }

    toString(): string {
        return this.validate()
            ? `${this._name}${COMMAND_SEPERATOR}${this._value?.toString()}`
            : "";
    }
}