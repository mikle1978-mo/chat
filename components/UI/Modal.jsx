import styles from "./Modal.module.css";

export default function MyModal({ isOpen, toggleOpen, children }) {
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={toggleOpen}
            className={`${styles.overlay}  ${isOpen ? styles.open : ""}`}
        >
            <div className={styles.modal} onClick={handleModalClick}>
                {children}
            </div>
        </div>
    );
}
