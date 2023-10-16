export interface IListResponse<T> {
    data: Array<T>;
    status: IListstatus;
}

export interface IListstatus {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
    notice: string | null;
    total_count: number;
}
