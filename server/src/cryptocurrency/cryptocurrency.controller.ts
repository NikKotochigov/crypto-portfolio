import { Controller, Get } from '@nestjs/common';
import { CryptocurrencyService } from './cryptocurrency.servise';
import { Observable, map } from 'rxjs';
import { Cryptocurrency } from './cryptocurrency.interface';

@Controller('cryptocurrency')
export class CryptocurrencyController {
    constructor(private readonly cryptocurrencyService: CryptocurrencyService) { }

    @Get('map')
    getCryptocurrencies(): Promise<Observable<Cryptocurrency[]>> {
        return this.cryptocurrencyService.getCryptocurrencies();
    }
}
