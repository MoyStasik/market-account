import { ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({children, open, handleSetIsModalOpen} : {children : ReactElement, open : boolean, handleSetIsModalOpen: (isOpen: boolean) => void}) {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (open) {
            modalRef.current?.showModal();
        }
        else {
            modalRef.current?.close();
        }
    }, [open])

    const handleCloseModal = () => {
        handleSetIsModalOpen(!open);
    }
    
    return createPortal(
        <dialog ref={modalRef} className="modal">
            <div className="header-modal">
                <img className="header-modal__img" src="/src/assets/cancel.svg" alt="cnacel-modal" onClick={handleCloseModal} />
            </div>
            {children}
        </dialog>,
         document.getElementById("modal")!);
}

export default Modal;
