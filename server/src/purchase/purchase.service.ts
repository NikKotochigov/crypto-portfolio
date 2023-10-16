import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchaseEntity } from './purchase.entity';
import { Repository } from 'typeorm';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseRO } from './purchase.interface';
import { validate } from 'class-validator';

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(PurchaseEntity)
        private readonly purchaseRepository: Repository<PurchaseEntity>
    ) { }

    async create(dto: CreatePurchaseDto): Promise<PurchaseRO> {
        const {
            asset_name,
            asset_price,
            quantity,
            purchase_date
        } = dto;

        const newPurchase = new PurchaseEntity();
        newPurchase.asset_name = asset_name;
        newPurchase.asset_price = asset_price;
        newPurchase.quantity = quantity;
        newPurchase.purchase_date = purchase_date;

        const errors = await validate(newPurchase);

        if (errors.length > 0) {
            const _errors = { username: 'Purchaseinput is not valid.' };
            throw new HttpException({ message: 'Input data validation failed', _errors }, HttpStatus.BAD_REQUEST);

        } else {
            const savedPurchase = await this.purchaseRepository.save(newPurchase);
            return this.buildPurchaseRO(savedPurchase);
        }

    }

    private buildPurchaseRO(purchase: PurchaseEntity) {
        const purchaseRO = {
            asset_name: purchase.asset_name,
            asset_price: purchase.asset_price,
            quantity: purchase.quantity,
            purchase_date: purchase.purchase_date,
        };

        return { purchase: purchaseRO };
    }
}
