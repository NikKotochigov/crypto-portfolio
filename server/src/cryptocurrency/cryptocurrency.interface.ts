export interface Cryptocurrency {
    id: number;
    rank: number;
    name: string;
    symbol: string;
    slug: string;
    is_active: number;
    first_historical_data: Date;
    last_historical_data: Date;
    platform: Platform | null;
}

export interface Platform {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
}
