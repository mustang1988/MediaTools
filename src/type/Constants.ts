export const COMMAND_SEPERATOR = ' '; // seperator between command options
export const RATIO_SEPERATOR_COLON = ':';   // ":" between dividend and divisor in ratio
export const RATIO_SEPERATOR_SLASH = '/';   // "/"" between dividend and divisor in ratio, default value in Ratio constructor
export const RATIO_SEPERATOR_POINT = '.';   // "." between dividend and divisor in ratio
export const DEFAULT_SUPPORTED_SEPARATORS = [
    RATIO_SEPERATOR_SLASH,
    RATIO_SEPERATOR_COLON,
    RATIO_SEPERATOR_POINT
];  // supported separators in RatioParser.ParseFromString
