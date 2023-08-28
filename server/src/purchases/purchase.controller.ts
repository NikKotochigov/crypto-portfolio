import { Controller, Get, Post, Body } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchase')
export class PurchaseController {
    constructor(private purchaseService: PurchaseService) { }

    @Post()
    async create(@Body() createPurchaseDto: CreatePurchaseDto) {
        this.purchaseService.add(createPurchaseDto);
    }

    @Get()
    async findAll(): Promise<string> {
        return 'get test';
    }
}