import { Option } from "./Option";

export class EnumOption<T> extends Option<T>{
    constructor(name: string, value: T, priority?: number, multiple?: boolean, conflicts?: string[]) {
        super(name, value, priority, multiple, conflicts);
    }

    validate(): boolean {
        return true;
    }
    
    toString(): string {
        return `${this._name} ${this._value}`;
    }
}