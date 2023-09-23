import { Cell, flexRender } from "@tanstack/react-table"

interface ITableCellProps<T> extends Cell<T, unknown> {
    className?: string;
}

export const TableCell = <T extends object>(props: ITableCellProps<T>) => {
    const { column } = props;
    const { getContext } = props;

    return (
        <td>
            <div className="flex justify-end">
                {flexRender(column.columnDef.cell, getContext())}
            </div>
        </td>
    )
}
