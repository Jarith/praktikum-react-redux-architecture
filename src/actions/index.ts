export type Action<P = void> = {
    type: string;
    payload: P extends void ? void : P;
};
