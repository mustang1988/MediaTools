import _ from 'lodash';
import { Ratio } from "./Ratio";

export class RatioParser {
    static DEFAULT_SEPARATORS = ['/', ':', '.'];

    static ParseFromString(string_ratio: string | null, separator?: string): Ratio | null {
        if (_.isNil(string_ratio)) {
            return null;
        }
        if (_.isUndefined(separator)) {
            for (const def_sep of RatioParser.DEFAULT_SEPARATORS) {
                const result = RatioParser.ParseFromString(string_ratio, def_sep);
                if (!_.isNull(result)) {
                    return result;
                }
            }
            return null;
        }
        const parts = string_ratio.split(separator);
        if (parts.length < 2) {
            return null;
        }
        const dividend = parseInt(parts[0]);
        const divisor = parseInt(parts[1]);
        if (_.isNaN(dividend) || _.isNaN(divisor)) {
            return null;
        }
        return new Ratio(dividend, divisor, separator);
    }
}