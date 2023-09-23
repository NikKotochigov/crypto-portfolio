export interface PurchaseData {
    asset_name: string;
    asset_price: number;
    quantity: number;
    purchase_date: Date;
}


export interface PurchaseRO {
    purchase: PurchaseData;
}
