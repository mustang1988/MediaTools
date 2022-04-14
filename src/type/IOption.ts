export interface IOption<T> {
    /**
     * Get the option name
     * @return {string}
     */
    getName(): string;

    /**
     * Get the option value
     * @return {T}
     */
    getValue(): T | null;

    /**
     * Get the option priority
     * @return {number}
     */
    getPriority(): number;

    /**
     * Whether the option support multiple set
     */
    isMultiple(): boolean;

    /**
     * Get the option conflict list
     * @return {string[]}
     */
    getConflicts(): string[];

    /**
     * Whether the option is valid
     * @return {boolean}
     */
    validate(): boolean;

    /**
     * Transfer the option to a string
     */
    toString(): string;

    /**
     * Transfer the option to a string array
     */
    toArray(): string[];
}