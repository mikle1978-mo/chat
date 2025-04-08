"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Library_column from "@/components/library/Library_column";
import { LibraryItems } from "@/lib/libraryItems";

export default function Library() {
    const [activeTab, setActiveTab] = useState("Images");
    const [isMobile, setIsMobile] = useState(false);

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

            <div className={styles.library_btn}>
                <img src='/images/icons/plus.svg' alt='Add new' />
            </div>
        </main>
    );
}
