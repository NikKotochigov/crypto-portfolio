import { useState } from "react"
import { TokenList } from "../TokenList"
import { Modal } from "../ui/Modal"
import axios from "axios";

import cls from './WatchList.module.scss';

const serverUrl = 'http://localhost:4000';

export const WatchList = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = async () => {
        const testValue = {
            id: 2,
            name: 'ETH',
            count: 1
        }
        try {
            await axios.post(`${serverUrl}/purchase`, testValue);
            // await axios.get(`${serverUrl}/purchase`);
            alert('Crypto added successfully!');
        } catch (error) {
            console.error('Error adding crypto', error);
        }
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Добавить актив</button>
            <button onClick={handleOnClick}>Добавить в БД</button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                className={cls.modal}
                title="Добавить в Watchlist"
            >
                <TokenList />
            </Modal>
        </>
    )
}