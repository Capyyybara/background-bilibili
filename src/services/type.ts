export interface HistoryElementType {
    HistoryId: number;
    userId: number;
    content: string;
}
export interface UserElementType {
    userId?: number;
    email: string;
    password: string;
    address: string;
}