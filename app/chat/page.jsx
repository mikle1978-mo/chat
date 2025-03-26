import ChatMessage from "@/components/chat/ChatMessage";
import styles from "./page.module.css";
import MessageInput from "@/components/layout/MessageInput";
import Image from "next/image";
import { messages } from "@/lib/chat2";

export default function Chat() {
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
                    </div>
                    <div className={styles.chat}>
                        <div className={styles.gradient_top}></div>
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                    </div>
                    <MessageInput />
                </div>
                <div className={styles.members_wrapper}>
                    <div className={styles.members}>
                        <div className={styles.members_heading}>
                            <span>Currently Online</span>
                            <span>4</span>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/AdamGreen.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.online}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>Adam Green</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text_blue}>
                                        Library
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/DavidSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.online}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>David Singh</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text_blue}>
                                        Library
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && (
                                    <div className={styles.online_orange}></div>
                                )}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Harper Singh
                                </span>
                                <span className={styles.text}>
                                    <span className={styles.text_orange}>
                                        Away&nbsp;
                                    </span>
                                    <span className={styles.text}>
                                        for 20 minutes
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && (
                                    <div className={styles.online_red}></div>
                                )}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Lily Patel 💅🏻
                                </span>
                                <span className={styles.text_red}>
                                    Do not disturb
                                </span>
                            </div>
                        </div>
                        <div className={styles.members_heading}>
                            <span>Offline</span>
                            <span>12</span>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/AdamGreen.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>Adam Green</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text}>Library</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/DavidSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>David Singh</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text}>Library</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Harper Singh
                                </span>
                                <span className={styles.text}>
                                    <span className={styles.text}>
                                        Away&nbsp;
                                    </span>
                                    <span className={styles.text}>
                                        for 20 minutes
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Lily Patel 💅🏻
                                </span>
                                <span className={styles.text}>
                                    Do not disturb
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/AdamGreen.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>Adam Green</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text}>Library</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/DavidSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>David Singh</span>
                                <span className={styles.text}>
                                    Exploring&nbsp;
                                    <span className={styles.text}>Library</span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Harper Singh
                                </span>
                                <span className={styles.text}>
                                    <span className={styles.text}>
                                        Away&nbsp;
                                    </span>
                                    <span className={styles.text}>
                                        for 20 minutes
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.member}>
                            <div className={styles.member_cover}></div>
                            <div className={styles.avatar}>
                                <Image
                                    src='/images/avatars/HarperSingh.png'
                                    alt='avatar'
                                    width={48}
                                    height={48}
                                />
                                {true && <div className={styles.offline}></div>}
                            </div>
                            <div className={styles.nameContainer}>
                                <span className={styles.name}>
                                    Lily Patel 💅🏻
                                </span>
                                <span className={styles.text}>
                                    Do not disturb
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.members_buttons}></div>
                </div>
            </div>
        </main>
    );
}
