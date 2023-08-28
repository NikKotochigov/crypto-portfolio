'use client'


import React, { ReactNode } from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

interface IProps {
    children: ReactNode
}

const queryClient = new QueryClient();

export const QueryProvider: React.FC<IProps> = ({ children }) => {
    return (<QueryClientProvider client={queryClient} >{children}</QueryClientProvider>)
}
