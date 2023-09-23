import { IsNotEmpty} from "class-validator";

export class CreatePurchaseDto {
    
    @IsNotEmpty()
    purchase_id: string;

    @IsNotEmpty()
    asset_name: string;

    @IsNotEmpty()
    asset_price: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    purchase_date: Date;
}