import _ from 'lodash';
import { DEFAULT_SUPPORTED_SEPARATORS } from '../type/Constants';
import { Ratio } from "./Ratio";

/* This class parses a string into a Ratio object. */
export class RatioParser {
    /**
     * Parse a string into a Ratio object.
     * If fail to parse, return null.
     * @param string_ratio {string} string to parse
     * @param separator {string} ratio separator, default is '/', ':' and '.'
     * @returns 
     */
    static ParseFromString(string_ratio: string | null, separator?: string): Ratio | null {
        if (_.isNil(string_ratio)) {
            return null;
        }
        if (_.isUndefined(separator)) {
            // try all supported separators, if parse result is not null, then return it
            for (const sep of DEFAULT_SUPPORTED_SEPARATORS) {
                const result = RatioParser.ParseFromString(string_ratio, sep);
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