import { ReactElement, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({children, open, handleSetIsModalOpen} : {children : ReactElement, open : boolean, handleSetIsModalOpen: (isOpen: boolean) => void}) {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    if (open) {
        modalRef.current?.showModal();
    }
    else {
        modalRef.current?.close();
    }

    const handleCloseModal = () => {
        handleSetIsModalOpen(!open);
    }
    
    return createPortal(
        <dialog className="modal" ref={modalRef} open={open}>
            <div className="header-modal">
                <img className="header-modal__img" src="/src/assets/cancel.svg" alt="cnacel-modal" onClick={handleCloseModal} />
            </div>
            {children}
        </dialog>,
         document.getElementById("modal")!);
}

export default Modal;
