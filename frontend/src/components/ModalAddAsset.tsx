import React from "react";
import { Modal } from "./ui/Modal";

interface IModalAddAssetProps {
    isOpen: boolean;
    onClose: VoidFunction;
}

export const ModalAddAsset: React.FC<IModalAddAssetProps> = (props) => {

    const { isOpen } = props;
    const { onClose } = props;

    return (
        <Modal
            title='Add Asset'
            isOpen={isOpen}
            onClose={onClose}
        />
    )
}