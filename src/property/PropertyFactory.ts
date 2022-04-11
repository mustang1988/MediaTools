import _ from "lodash";
import { RatioParser } from "../ratio/RatioParser";
import { NumberProperty } from "./NumberProperty";
import { ObjectProperty } from "./ObjectProperty";
import { RatioProperty } from "./RatioProperty";
import { StringProperty } from "./StringProperty";

export class PropertyFactory {
    /**
     * Create a StringProperty instance using it's value.
     * @param value {string|null}
     * @returns {StringProperty | null}
     */
    static CreateStringProperty(value: string | null): StringProperty | null {
        return _.isNull(value) ? null : new StringProperty(value);
    }

    /**
     * Create a NumberProperty instance using it's value.
     * If value is not a number, return null.
     * @param value {string|null}
     * @returns {NumberProperty | null}
     */
    static CreateNumberProperty(value: string | null): NumberProperty | null {
        return _.isNull(value) ? null : new NumberProperty(parseFloat(value));
    }

    /**
     * Create a RatioProperty instance using it's string value.
     * If string value fail to parse, return null.
     * @param value {string|null}
     * @returns {RatioProperty | null}
     */
    static CreateRatioProperty(value: string | null): RatioProperty | null {
        const v = RatioParser.ParseFromString(value);
        return _.isNull(v) ? null : new RatioProperty(v);
    }

    /**
     * Create a ObjectProperty instance using it's value.
     * @param value {object|null}
     * @returns {ObjectProperty | null}
     */
    static CreateObjectProperty(value: object | null): ObjectProperty | null {
        return _.isNull(value) ? null : new ObjectProperty(value);
    }
}