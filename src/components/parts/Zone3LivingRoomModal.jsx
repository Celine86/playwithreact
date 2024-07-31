import { Modal } from "../common/Modal.jsx";
import { createPortal } from 'react-dom';

export function Zone3LivingRoom({isOpen, onClose}) {
    return (
        <>
        {isOpen  && (
        <div>
            {createPortal (
                <Modal>
                    <div className='modalContainer'>
                        <h2 className='modalContainer--title'>Zone3</h2>
                        <button className="modalBtn" onClick={onClose}>J'ai compris !</button>
                    </div>
                </Modal>
                , document.getElementById("modal")
            )}
        </div>
        )}
        </>
    )
}