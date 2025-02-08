import { ReactElement, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css"

function Modal({children, open} : {children : ReactElement, open : boolean}) {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    if (open) {
        modalRef.current?.showModal();
    }
    else {
        modalRef.current?.close();
    }
    
    return createPortal(
        <dialog className="modal" ref={modalRef} open={open}>{children}</dialog>,
         document.getElementById("modal")!);
}

export default Modal;
