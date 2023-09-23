import { Row, flexRender } from "@tanstack/react-table";
import { TableCell } from "../TableCell/TableCell";

interface ITableRowProps<T> {
    index: number;
    row: Row<T>;
    className?: string;
    onClick?: (id: number) => void;
}

export const TableRow = <T extends object>(props: ITableRowProps<T>) => {
    const { row } = props;

    return (
        <tr className="border-t border-b h-10">
            {row.getVisibleCells().map((cell) => <TableCell {...cell} key={cell.id} />)}
        </tr>
    )
}