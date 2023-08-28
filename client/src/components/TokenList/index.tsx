import { CryptoCurrencyService } from "@/services/CryptoCurrencyService";
import { useQuery } from "react-query";

import cls from './TokenList.module.scss';
import { TokenButton } from "../TokenButton";
import { useEffect, useState } from "react";

export const TokenList = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error, refetch } = useQuery('coinList', () => CryptoCurrencyService.getCoins(page));

    // Добавляем обработчик события скролла при монтировании компонента
    useEffect(() => {
        const element = document.getElementById('token-list');
        const handleScroll = () => {
            if (element) {
                const isAtBottom = element.clientHeight + element.scrollTop >= element.scrollHeight;
                if (isAtBottom && !isLoading && data && data.length > 0) {
                    setPage((prevPage) => prevPage + 1);
                }
            }
        }
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => {
                element.removeEventListener('scroll', handleScroll);
            };
        }
    }, [data]); // Повторно привязываем обработчик при изменении данных, чтобы обновить состояние

    useEffect(() => {
        console.log({ page });
        refetch();
    }, [page])

    if (isLoading) return (<div>Loading...</div>)
    if (!data) return null

    return (
        <div className={cls.wrapper}>
            <input className={cls.input} placeholder='Найти актив...' name='search' />
            <ul className={cls.ul} id='token-list'>
                {data.map((tokenInfo) => {
                    return (
                        <li key={tokenInfo.id}>
                            <TokenButton tokenInfo={tokenInfo} />
                        </li>
                    )
                })}
            </ul>
            <div>footer</div>
        </div>
    )
}