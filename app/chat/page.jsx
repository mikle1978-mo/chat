import styles from "./page.module.css";
import Image from "next/image";

export default function Chat() {
    return (
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
                        <span className={styles.text_blue}>Library</span>
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
                        <span className={styles.text_blue}>Library</span>
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
                    {true && <div className={styles.online_orange}></div>}
                </div>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>Harper Singh</span>
                    <span className={styles.text}>
                        <span className={styles.text_orange}>Away&nbsp;</span>
                        <span className={styles.text}>for 20 minutes</span>
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
                    {true && <div className={styles.online_red}></div>}
                </div>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>Lily Patel 💅🏻</span>
                    <span className={styles.text_red}>Do not disturb</span>
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
                    <span className={styles.name}>Harper Singh</span>
                    <span className={styles.text}>
                        <span className={styles.text}>Away&nbsp;</span>
                        <span className={styles.text}>for 20 minutes</span>
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
                    <span className={styles.name}>Lily Patel 💅🏻</span>
                    <span className={styles.text}>Do not disturb</span>
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
                    <span className={styles.name}>Harper Singh</span>
                    <span className={styles.text}>
                        <span className={styles.text}>Away&nbsp;</span>
                        <span className={styles.text}>for 20 minutes</span>
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
                    <span className={styles.name}>Lily Patel 💅🏻</span>
                    <span className={styles.text}>Do not disturb</span>
                </div>
            </div>
        </div>
    );
}
