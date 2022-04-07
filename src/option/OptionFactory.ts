import _ from "lodash";
import { RatioParser } from "../ratio/RatioParser";
import { IRatio } from "../type/IRatio";
import { BooleanOption } from "./BooleanOption";
import { EnumOption } from "./EnumOption";
import { NumberOption } from "./NumberOption";
import { RatioOption } from "./RatioOption";
import { StringOption } from "./StringOption";

export class OptionFactory {
    static CreateStringOption(
        name: string,
        value: string,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): StringOption {
        return new StringOption(name, value, priority, multiple, conflicts);
    }

    static CreateNumberOption(
        name: string,
        value: number,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[],
        min?: number,
        max?: number
    ): NumberOption {
        return new NumberOption(name, value, priority, multiple, conflicts, min, max);
    }

    static CreateBooleanOption(
        name: string,
        value?: boolean,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): BooleanOption {
        return new BooleanOption(name, value, priority, multiple, conflicts);
    }

    static CreateRatioOption(
        name: string,
        value: string,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): RatioOption | null {
        const v = RatioParser.ParseFromString(value);
        return _.isNil(v) ? null : new RatioOption(name, v, priority, multiple, conflicts);
    }

    static CreateEnumOption<T>(
        name: string,
        value: T,
        priority?: number,
        multiple?: boolean,
        conflicts?: string[]
    ): EnumOption<T> {
        return new EnumOption(name, value, priority, multiple, conflicts);
    }
}