import { Property } from "./Property";

export class ObjectProperty extends Property<object>{
    constructor(value: object) {
        super(value);
    }
}