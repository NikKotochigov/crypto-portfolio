import React from 'react';
import { IInputBaseProps, InputBase } from './InputBase';

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
    fill?: string
}

export interface IInputProps extends IInputBaseProps {
    className?: string
    classNameInput?: string
    label?: string
    Icon?: React.FC<ISvgIconProps>
    iconProps?: React.SVGProps<HTMLSpanElement>;
    required?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    ref?: React.RefObject<HTMLInputElement>
}

export const InputInternal = (props: IInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
        className,
        classNameInput,
        isError,
        label,
        Icon,
        iconProps,
        value,
        required,
        onChange,
        ...restProps
    } = props;

    return (
        <div className={className} ref={ref}>
            <div className='relative'>
                {label && (
                    <label className=''>
                        {label}
                    </label>
                )}

                <div className='flex align-middle'>
                    {Icon && (
                        <span
                            {...iconProps}
                            className='absolute left-1'
                            role="button"
                            tabIndex={0}
                        >
                            <Icon />
                        </span>
                    )}

                    <InputBase
                        className={classNameInput}
                        isError={isError}
                        value={value}
                        onChange={onChange}
                        {...restProps}
                    />
                </div>
            </div>
        </div>
    );
};

export const Input = React.forwardRef(InputInternal) as typeof InputInternal;
