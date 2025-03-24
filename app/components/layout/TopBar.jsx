"use client";

import styles from "./TopBar.module.css";
import { useState } from "react";
import ArtificiumIcon from "@/public/images/icons/artificium.svg";
import ChatIcon from "@/public/images/icons/chat.svg";
import FolderIcon from "@/public/images/icons/folder.svg";

const tabs = [
    { id: 1, name: "Artificium", icon: ArtificiumIcon },
    { id: 2, name: "Chat", icon: ChatIcon },
    { id: 3, name: "Library", icon: FolderIcon },
];

export default function TopBar() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className={styles.topbar}>
            <div className={styles.heading}>
                <div className={styles.project}>
                    <h1>Orbital Oddysey</h1>{" "}
                    <span>Marketing Campaign for a new TV series Launch</span>
                </div>
                <div className={styles.options}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/avatar3.png'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/avatar4.png'
                                alt='avatar'
                            />
                            <div className={styles.status}></div>
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/avatar5.png'
                                alt='avatar'
                            />
                            <div className={styles.status}></div>
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/avatar6.png'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.count}>+4</div>
                    </div>
                    <div className={styles.actions}>
                        <div className={styles.share}>
                            <img src='/images/icons/share.svg' alt='icon' />
                            <span>Share</span>
                        </div>
                    </div>
                    <div className={styles.edit}>
                        <img src='/images/icons/edit.svg' alt='icon' />
                    </div>
                </div>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.tabs}>
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`${styles.tab} ${
                                activeTab === tab.id ? styles.active : ""
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <tab.icon className={styles.icon} />
                            <span>{tab.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
