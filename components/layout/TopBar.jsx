"use client";

import styles from "./TopBar.module.css";
import { useState } from "react";
import ArtificiumIcon from "@/public/images/icons/artificium.svg";
import ChatIcon from "@/public/images/icons/chat.svg";
import FolderIcon from "@/public/images/icons/folder.svg";
import MyModal from "@/components/UI/Modal";
import Share from "./Share";
import Link from "next/link";

const tabs = [
    {
        id: 1,
        name: "Artificium",
        icon: ArtificiumIcon,
        href: "/artificium",
    },
    { id: 2, name: "Chat", icon: ChatIcon, href: "/chat" },
    { id: 3, name: "Library", icon: FolderIcon, href: "/library" },
];

export default function TopBar() {
    const [activeTab, setActiveTab] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <div className={styles.topbar}>
            <MyModal isOpen={isOpen} toggleOpen={toggleOpen}>
                <Share toggleOpen={toggleOpen} />
            </MyModal>
            <div className={styles.heading}>
                <div className={styles.project}>
                    <h1>Orbital Oddysey</h1>{" "}
                    <span>Marketing Campaign for a new TV series Launch</span>
                </div>
                <div className={styles.options}>
                    <div className={styles.users}>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/Avatar3.webp'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/Avatar4.webp'
                                alt='avatar'
                            />
                            <div className={styles.status}></div>
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/Avatar5.webp'
                                alt='avatar'
                            />
                            <div className={styles.status}></div>
                        </div>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/Avatar6.webp'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.count}>+4</div>
                    </div>
                    <div className={styles.actions} onClick={toggleOpen}>
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
                        <li key={tab.id} onClick={() => setActiveTab(tab.id)}>
                            <Link
                                href={tab.href}
                                className={`${styles.tab} ${
                                    activeTab === tab.id ? styles.active : ""
                                }`}
                            >
                                <tab.icon className={styles.icon} />
                                <span>{tab.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
