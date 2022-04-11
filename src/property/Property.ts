import { Ratio } from "../ratio/Ratio";
import { IProperty } from "../type/IProperty";

/**
 * Root super class for media metadata property.
 */
export class Property<T> implements IProperty<T> {
    _value: T;

    constructor(value: T) {
        this._value = value;
    }

    /**
     * Get media file metadata property value.
     * @returns {T}
     */
    getValue(): T {
        return this._value;
    }
    
    /**
     * Is metadata property value is instance of Ratio.
     * @returns {boolean}
     */
    isRatio(): boolean {
        return this._value instanceof Ratio;
    }
}