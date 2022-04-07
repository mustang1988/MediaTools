export interface IProperty<T> {
    getValue(): T;
    
    isRatio(): boolean;
}