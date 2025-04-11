import { useState } from "react";
import styles from "./ImageEditorModal.module.css";

export default function ImageEditorModal({ image, isOpen, onClose, onSave }) {
    const [editedImage, setEditedImage] = useState(image);
    const [editTools, setEditTools] = useState({
        brightness: 100,
        contrast: 100,
        saturation: 100,
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditTools((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.imageContainer}>
                    <img
                        src={editedImage}
                        alt='Редактируемое изображение'
                        style={{
                            filter: `brightness(${editTools.brightness}%) contrast(${editTools.contrast}%) saturate(${editTools.saturation}%)`,
                        }}
                    />
                </div>

                <div className={styles.toolPanel}>
                    <div className={styles.toolGroup}>
                        <label>Яркость</label>
                        <input
                            type='range'
                            name='brightness'
                            min='0'
                            max='200'
                            value={editTools.brightness}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.toolGroup}>
                        <label>Контраст</label>
                        <input
                            type='range'
                            name='contrast'
                            min='0'
                            max='200'
                            value={editTools.contrast}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.toolGroup}>
                        <label>Насыщенность</label>
                        <input
                            type='range'
                            name='saturation'
                            min='0'
                            max='200'
                            value={editTools.saturation}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles.modalActions}>
                    <button onClick={onClose}>Отмена</button>
                    <button onClick={() => onSave(editedImage)}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
}
