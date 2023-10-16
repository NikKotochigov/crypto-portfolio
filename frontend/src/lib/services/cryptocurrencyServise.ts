import { AxiosResponse } from "axios";
import { http } from "../http";
import { ICryptocurrency } from "@/types/cryptocurrency";
import { IListResponse } from "@/types/list";

export const cryptocurrencyService = {
    getAll: async (): Promise<IListResponse<ICryptocurrency>> => {
        const response = await http.get<IListResponse<ICryptocurrency>>('/cryptocurrencies/list');
        return response.data;
    },
};
