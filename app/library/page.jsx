"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Library_column from "@/components/library/Library_column";
import { LibraryItems } from "@/lib/libraryItems";
import LibraryModal from "@/components/library/Library_modal";
import LibraryModalItem from "@/components/library/Library_modal_item";
import { LibraryModalItems } from "@/lib/libraryModalItems";

export default function Library() {
    const [activeTab, setActiveTab] = useState("Images");
    const [isMobile, setIsMobile] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const toggleModal = () => setIsOpenModal(!isOpenModal);

    const COLUMN_ITEMS = {
        Images: LibraryItems.filter((item) => item.category === "Images"),
        Documents: LibraryItems.filter((item) => item.category === "Documents"),
        Ideas: LibraryItems.filter((item) => item.category === "Ideas"),
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 576);
        };

        handleResize(); // Проверяем при загрузке
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <main className={styles.main}>
            <LibraryModal isOpen={isOpenModal} toggleOpen={toggleModal}>
                <div className={styles.modal_heading}>
                    <div className={styles.modal_heading_top}>
                        <h2>Captain Drake</h2>
                        <div className={styles.modal_btngroup}>
                            <img
                                src='./images/icons/full-screen.svg'
                                alt='icon'
                            />
                            <img
                                src='./images/icons/cross-02.svg'
                                alt='icon'
                                onClick={toggleModal}
                            />
                        </div>
                    </div>
                    <div className={styles.modal_description}>
                        Natural born leader with years of experience in space
                        exploration.
                    </div>
                </div>
                <ul className={styles.modal_nav}>
                    <li>Chat</li>
                    <li>Images</li>
                    <li>Comments</li>
                </ul>
                <div className={styles.modal_content}>
                    {LibraryModalItems.map((item, index) => (
                        <LibraryModalItem key={index} item={item} />
                    ))}
                </div>
            </LibraryModal>

            <div className={styles.pageContainer}>
                <ul className={styles.nav}>
                    {Object.keys(COLUMN_ITEMS).map((category) => (
                        <li
                            key={category}
                            className={
                                activeTab === category ? styles.active : ""
                            }
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>

                <div className={styles.library_container}>
                    {isMobile ? (
                        <Library_column items={COLUMN_ITEMS[activeTab]} />
                    ) : (
                        <>
                            <Library_column items={COLUMN_ITEMS.Images} />
                            <Library_column items={COLUMN_ITEMS.Documents} />
                            <Library_column items={COLUMN_ITEMS.Ideas} />
                        </>
                    )}
                </div>
            </div>

            <div className={styles.library_btn} onClick={toggleModal}>
                <img src='/images/icons/plus.svg' alt='Add new' />
            </div>
        </main>
    );
}
