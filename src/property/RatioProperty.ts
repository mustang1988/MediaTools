import _ from "lodash";
import { IRatio } from "../type/IRatio";
import { Property } from "./Property";

export class RatioProperty extends Property<IRatio> {
    constructor(value: IRatio) {
        super(value);
    }
}