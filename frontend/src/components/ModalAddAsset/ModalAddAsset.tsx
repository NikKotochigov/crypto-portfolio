import React from "react";
import { Modal } from "../ui/Modal";
import { genericComponentRender } from "@/lib/genericComponentRender";
import { ModalAddAssetSelectCoin } from "./ModalAddAssetSelectCoin/ModalAddAssetSelectCoin";

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
            content={genericComponentRender(ModalAddAssetSelectCoin, {})}
        />
    )
}