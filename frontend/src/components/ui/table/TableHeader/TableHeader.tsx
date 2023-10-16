import { HeaderContext, flexRender } from "@tanstack/react-table"

interface ITableHeaderProps<T> extends HeaderContext<T, unknown> {
    className?: string;
}

export const TableHeader = <T extends object>(props: ITableHeaderProps<T>) => {
    const { header } = props;

    return (
        <th>
            <div className="flex justify-end">
                {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
            </div>
        </th>
    )
}