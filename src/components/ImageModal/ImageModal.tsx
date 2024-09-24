import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { ImageModalProps } from "../../types";
import React from "react";

Modal.setAppElement("#root");
const style = {
    base: css.ReactModal__Overlay,
    afterOpen: css["ReactModal__Overlay--after-open"],
    beforeClose: css["ReactModal__Overlay--before-close"],
};

const ImageModal: React.FC<ImageModalProps> = ({modalIsOpen, closeModal, src, alt}) => {
    return (
        <>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} bodyOpenClassName={css["ReactModal__Body--open"]} overlayClassName={style} className={css.ReactModal__Content} contentLabel="Example Modal" afterOpen={css.ReactModal__Overlay}>
                <img src={src} alt={alt} />
            </Modal>
        </>
    );
};

export default ImageModal;
