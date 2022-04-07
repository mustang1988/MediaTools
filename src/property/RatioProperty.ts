import _ from "lodash";
import { IRatio } from "../type/IRatio";
import { Property } from "./Property";

export class RatioProperty extends Property<IRatio> {
    seperator: string;
    
    constructor(value: IRatio, seperator?: string) {
        super(value);
        this.seperator = _.isUndefined(seperator) ? "/" : seperator;
    }
}