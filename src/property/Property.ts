import { Ratio } from "../ratio/Ratio";
import { IProperty } from "../type/IProperty";

export class Property<T> implements IProperty<T> {
    _value: T;

    constructor(value: T) {
        this._value = value;
    }

    getValue(): T {
        return this._value;
    }
    
    isRatio(): boolean {
        return this._value instanceof Ratio;
    }
}