import { Property } from "./Property";

export class StringProperty extends Property<string> {
    constructor(value: string) {
        super(value);
    }
}