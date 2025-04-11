import styles from "./Library_modal.module.css";

export default function LybraryModal({ isOpen, toggleOpen, children }) {
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
