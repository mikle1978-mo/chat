import styles from "./MessageInput.module.css";

export default function MessageInput() {
    return (
        <div className={styles.messageinput}>
            <div className={styles.microphone}>
                <img src='/images/icons/microphone.svg' alt='icon' />
            </div>
            <input
                className={styles.input}
                placeholder='You can ask me anything! I am here to help.'
            ></input>
            <div className={styles.paperclip}>
                <img src='/images/icons/paperclip.svg' alt='icon' />
            </div>
            <div className={styles.paperplane}>
                <img src='/images/icons/paperplane.svg' alt='icon' />
            </div>
        </div>
    );
}
