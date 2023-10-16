'use client'

import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableRow } from "./TableRow/TableRow";
import { TableHeader } from "./TableHeader/TableHeader";

interface TableProps<T extends object> {
    columns: ColumnDef<T>[];
    data: T[];
    className?: string;
}

export const Table = <T extends object>(props: TableProps<T>) => {
    const { columns, data } = props;

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const headerGroup = table.getHeaderGroups();
    const rowsModel = table.getRowModel();

    return (
        <table className="w-full table-auto border-t border-b">
            <thead>
                {headerGroup.map((headerGroup) => {
                    return (
                        <tr className="h-12" key={headerGroup.id}>
                            {headerGroup.headers.map((header) => <TableHeader key={header.id} {...header.getContext()} />)}
                        </tr>
                    )
                })}
            </thead>
            <tbody>
                {rowsModel.rows.map((row, index) => (
                    <TableRow key={row.id} row={row} index={index} />
                ))}
            </tbody>
        </table>
    )
}