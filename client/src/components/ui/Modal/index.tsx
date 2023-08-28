import { ReactNode } from 'react';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import { Icon } from '../Icon';

import cls from './Modal.module.scss';

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
    className?: string;
}

export const Modal: React.FC<IModal> = ({ isOpen, onClose, title, children, className }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={classNames(cls.modal, className)}
        >
            {title &&
                <header className={cls.header}>
                    <div className={cls.title}>{title}</div>
                    <div className={cls.close} onClick={onClose}>
                        <Icon name='close' size={16} />
                    </div>
                </header>
            }
            {children}
        </ReactModal>
    )
}