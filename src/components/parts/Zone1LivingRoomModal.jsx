import { ZoneModal } from '../common/ZoneModal.jsx'
import { DragNDrop } from '../common/DragNDrop.jsx';

export function Zone1LivingRoom({ isOpen, onClose }) {
    return (
        <ZoneModal isOpen={isOpen} onClose={onClose}>
            <p>Déplace les planches de gauche à droite pour découvrir une lettre !</p>
            <DragNDrop 
                className="indice3"
            />
        </ZoneModal>
    );
}