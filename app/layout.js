"use client";

import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import { useState } from "react";

const jakartaSans = Plus_Jakarta_Sans({
    variable: "--font-jakarta-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = (index) => {
        setIsNavOpen((prevState) => (prevState === index ? null : index));
    };
    const handleClick = () => {
        toggleNav();
    };

    return (
        <html lang='en'>
            <body className={`${jakartaSans.variable} ${geistMono.variable}`}>
                <div className='container'>
                    <SideBar
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        handleClick={handleClick}
                    />
                    <div className='content'>
                        <TopBar
                            isNavOpen={isNavOpen}
                            setIsNavOpen={setIsNavOpen}
                        />
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
