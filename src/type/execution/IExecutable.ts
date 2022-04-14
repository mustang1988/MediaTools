export interface IExecutable<T> {
    /**
     * Check whether the binary is executable
     * @return {boolean}
     */
    checkBin(): boolean;

    /**
     * Get the binary path
     * @return {string}
     */
    getBin(): string;

    /**
     * Execute the binary asynchronously
     * @return {Promise<T | null>}
     */
    execute(): Promise<T | null>;

    /**
     * Execute the binary synchronously
     * @return {T | null}
     */
    executeSync(): T | null;
}