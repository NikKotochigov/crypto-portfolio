"use client"
import React, { useCallback, useState } from 'react'

import { Table } from "@/components/ui/table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Button } from '@/components/ui/Button';
import { ModalAddAsset } from '@/components/ModalAddAsset';

interface ICoinInfo {
    id: number,
    name: string,
    price: number,
    averagePrice: number,
    currentPrice: number,
    quantity: number,
    amount: number,
}

const data = [
    {
        id: 1,
        name: "Bitcoin",
        price: 48000.0,
        averagePrice: 47000.0,
        currentPrice: 49000.0,
        quantity: 10,
        amount: 490000.0,
    },
    {
        id: 2,
        name: "Ethereum",
        price: 3500.0,
        averagePrice: 3400.0,
        currentPrice: 3600.0,
        quantity: 8,
        amount: 28800.0,
    },
    {
        id: 3,
        name: "Ripple",
        price: 1.2,
        averagePrice: 1.1,
        currentPrice: 1.3,
        quantity: 500,
        amount: 650.0,
    },
    {
        id: 4,
        name: "Litecoin",
        price: 150.0,
        averagePrice: 140.0,
        currentPrice: 160.0,
        quantity: 15,
        amount: 2400.0,
    },
    {
        id: 5,
        name: "Cardano",
        price: 2.0,
        averagePrice: 2.2,
        currentPrice: 1.8,
        quantity: 1000,
        amount: 1800.0,
    },
    {
        id: 6,
        name: "Polkadot",
        price: 30.0,
        averagePrice: 32.0,
        currentPrice: 28.0,
        quantity: 20,
        amount: 560.0,
    },
    {
        id: 7,
        name: "Chainlink",
        price: 25.0,
        averagePrice: 26.0,
        currentPrice: 24.0,
        quantity: 50,
        amount: 1200.0,
    },
    {
        id: 8,
        name: "Stellar",
        price: 0.5,
        averagePrice: 0.6,
        currentPrice: 0.4,
        quantity: 2000,
        amount: 800.0,
    },
    {
        id: 9,
        name: "Dogecoin",
        price: 0.3,
        averagePrice: 0.4,
        currentPrice: 0.2,
        quantity: 5000,
        amount: 1000.0,
    },
    {
        id: 10,
        name: "Solana",
        price: 150.0,
        averagePrice: 160.0,
        currentPrice: 140.0,
        quantity: 10,
        amount: 1400.0,
    },
];

const columnHelper = createColumnHelper<ICoinInfo>();
const columns: any = [
    columnHelper.accessor("id", {
        header: "id",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("name", {
        header: "Name",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("price", {
        header: "Price",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("averagePrice", {
        header: "Avr. price",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("currentPrice", {
        header: "Curr. price",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("quantity", {
        header: "Quantity",
        cell: (props) => props.renderValue(),
    }),
    columnHelper.accessor("amount", {
        header: "Amount",
        cell: (props) => props.renderValue(),
    }),
];

export default function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className='container py-12'>
                <div className='flex justify-between mb-4 align-middle'>
                    <h2 className='font-semibold'>Your assets</h2>
                    <Button onClick={() => setIsModalOpen(true)}>Add asset</Button>
                </div>
                <Table columns={columns} data={data} />
            </div>
            <ModalAddAsset isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
