export declare class Queue {
    static PollIntervalMs: number;
    private ready;
    constructor();
    queueOperation(fn: () => void): Promise<{}>;
    private recheck;
    private doCheck;
}
