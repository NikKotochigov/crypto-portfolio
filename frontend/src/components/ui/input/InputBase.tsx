import React from 'react';
import { cn } from '@/lib/utils';

export interface IInputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    className?: string
    isError?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputBase = React.forwardRef<HTMLInputElement, IInputBaseProps>((props, ref) => {
    const {
        className,
        isError,
        value,
        ...restProps
    } = props;
    const { onChange } = props;

    return (
        <input
            ref={ref}
            className={cn('rounded-xl w-full p-1 pl-2 bg-slate-200 focus:bg-inherit')}
            autoComplete="off"
            value={value || ''}
            onChange={onChange}
            {...restProps}
        />
    );
});
