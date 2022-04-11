export interface IExecutable<T> {
    checkBin(): boolean;
    getBin(): string;
    execute(): Promise<T | null>;
    executeSync(): T | null;
}