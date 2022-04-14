export interface IProperty<T> {
    /**
     * Get the property name
     * @return {T}
     */
    getValue(): T;
    
    /**
     * Whether the property's value is a Ratio
     */
    isRatio(): boolean;
}