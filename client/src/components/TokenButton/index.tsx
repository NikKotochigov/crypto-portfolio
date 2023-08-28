import { ITokenInfo } from "@/types/tokens"

import cls from './TokenButton.module.scss';

interface ITokenButton {
    tokenInfo: ITokenInfo;
}

export const TokenButton: React.FC<ITokenButton> = ({ tokenInfo }) => {

    return (
        <button className={cls.button}>
            <div className={cls.wrapper}>
                <span>
                    <img
                        src={tokenInfo.image}
                        alt="token"
                        className={cls.img}
                    />
                </span>
                <span>{tokenInfo.symbol}</span>
                <span>{tokenInfo.name}</span>
            </div>
        </button>)
}