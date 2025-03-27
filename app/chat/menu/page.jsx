import ChatMessage from "@/components/chat/ChatMessage";
import styles from "./page.module.css";
import MessageInput from "@/components/layout/MessageInput";
import Image from "next/image";
import { messages } from "@/lib/chat2";

export default function Menu() {
    return (
        <div className={styles.members}>
            <details className={styles.details}>
                <summary className={styles.members_heading}>
                    Information
                </summary>
                <ul>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/padlock.svg' alt='icon' />
                            <span>Top Secret</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Feedback</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Spaceship Crew</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li className={styles.users}>
                        <ul className={styles.users_list}>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/AdamGreen.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Adam Green
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/DavidSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        David Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_orange}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Harper Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div hidden></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_red}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Lily Patel 💅🏻
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User interface</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User experience</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                </ul>
            </details>
            <div className={styles.divider}></div>
            <details className={styles.details}>
                <summary className={styles.members_heading}>
                    Public Channels
                </summary>
                <ul>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/padlock.svg' alt='icon' />
                            <span>Top Secret</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Feedback</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Spaceship Crew</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li className={styles.users}>
                        <ul className={styles.users_list}>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/AdamGreen.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Adam Green
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/DavidSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        David Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_orange}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Harper Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div hidden></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_red}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Lily Patel 💅🏻
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User interface</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User experience</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                </ul>
            </details>
            <div className={styles.divider}></div>
            <details className={styles.details}>
                <summary className={styles.members_heading}>
                    Private Channels
                </summary>
                <ul>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/padlock.svg' alt='icon' />
                            <span>Top Secret</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Feedback</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>Spaceship Crew</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li className={styles.users}>
                        <ul className={styles.users_list}>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/AdamGreen.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Adam Green
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/DavidSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div className={styles.online}></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        David Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_orange}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Harper Singh
                                    </span>
                                </div>
                            </li>
                            <li className={styles.user_item}>
                                <div className={styles.user_item_line}>
                                    <div></div>
                                    <div></div>
                                    <div hidden></div>
                                </div>
                                <div className={styles.avatar}>
                                    <Image
                                        src='/images/avatars/HarperSingh.png'
                                        alt='avatar'
                                        width={48}
                                        height={48}
                                    />
                                    {true && (
                                        <div
                                            className={styles.online_red}
                                        ></div>
                                    )}
                                </div>
                                <div className={styles.nameContainer}>
                                    <span className={styles.name}>
                                        Lily Patel 💅🏻
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User interface</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                    <li>
                        <div className={styles.item_left}>
                            <img src='/images/icons/globe.svg' alt='icon' />
                            <span>User experience</span>
                        </div>
                        <div className={styles.item_right}></div>
                    </li>
                </ul>
            </details>
        </div>
    );
}
