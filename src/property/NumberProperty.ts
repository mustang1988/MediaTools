import { Property } from "./Property";

export class NumberProperty extends Property<number>{
    constructor(value: number) {
        super(value);
    }
}