"use client";

import styles from "./page.module.css";
import ChatMessage from "@/components/chat/ChatMessage";
import MessageInput from "@/components/layout/MessageInput";
import { messages } from "@/lib/chat2";
import { useRouter, usePathname } from "next/navigation";

export default function ChatLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <main className={styles.main}>
            <div className={styles.pageContainer}>
                <div className={styles.middle}>
                    <div className={styles.heading}>
                        <div className={styles.projectName}>
                            <h2>Spaceship Crew</h2>{" "}
                            <span className={styles.badge}>4</span>
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.buttonIcon}>
                                <img src='/images/icons/star.svg' alt='icon' />
                            </div>
                            <div className={styles.buttonIcon}>
                                <img src='/images/icons/dots.svg' alt='icon' />
                            </div>
                        </div>
                        <div className={styles.gradient_top}></div>
                    </div>
                    <div className={styles.chat}>
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                    </div>
                    <MessageInput />
                </div>
                <div className={styles.members_wrapper}>
                    {children}
                    <div className={styles.members_BtnGroup}>
                        <div
                            className={`${styles.members_button} ${
                                pathname === "/chat" ? styles.activeBtn : ""
                            }`}
                            onClick={() => router.push("/chat")}
                        >
                            <img
                                src='/images/icons/chat-buble.svg'
                                alt='icon'
                            />
                            <span>Chat</span>
                        </div>
                        <div
                            className={`${styles.members_button} ${
                                pathname === "/chat/menu"
                                    ? styles.activeBtn
                                    : ""
                            }`}
                            onClick={() => router.push("/chat/menu")}
                        >
                            <span>Members</span>
                            <img src='/images/icons/users.svg' alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
