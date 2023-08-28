import axios from "axios";
import { BASE_COIN_GECKO_URL } from "../consts/config";
import { ITokenInfo } from "@/types/tokens";

export namespace CryptoCurrencyService {
    export const getCoins = async (page: number): Promise<ITokenInfo[]> => {
        console.log("getCoins");
        const { data } = await axios.get(
            `${BASE_COIN_GECKO_URL}/coins/markets`,
            {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: page, 
                    sparkline: false,
                    locale: 'en',
                },
            }
        );
        return data;
    };
}
