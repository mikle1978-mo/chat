import styles from "./page.module.css";
import { messages } from "@/lib/chat";
import ArtificiumMessage from "../../components/artificium/ArtificiumMessage";
import MessageInput from "@/components/layout/MessageInput";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.gradient_top}></div>
                <div className={styles.messageContainer}>
                    {messages.map((msg) => (
                        <ArtificiumMessage key={msg.id} message={msg} />
                    ))}
                </div>
            </main>
            <MessageInput />
        </>
    );
}
