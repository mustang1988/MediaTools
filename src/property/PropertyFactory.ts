import _ from "lodash";
import { RatioParser } from "../ratio/RatioParser";
import { IRatio } from "../type/IRatio";
import { NumberProperty } from "./NumberProperty";
import { ObjectProperty } from "./ObjectProperty";
import { RatioProperty } from "./RatioProperty";
import { StringProperty } from "./StringProperty";

export class PropertyFactory {
    static CreateStringProperty(value: string | null): StringProperty | null {
        return _.isNull(value) ? null : new StringProperty(value);
    }

    static CreateNumberProperty(value: string | null): NumberProperty | null {
        return _.isNull(value) ? null : new NumberProperty(parseFloat(value));
    }

    static CreateRatioProperty(value: string | null): RatioProperty | null {
        const v = RatioParser.ParseFromString(value);
        return _.isNull(v) ? null : new RatioProperty(v);
    }
    
    static CreateObjectProperty(value: object | null): ObjectProperty | null {
        return _.isNull(value) ? null : new ObjectProperty(value);
    }
}