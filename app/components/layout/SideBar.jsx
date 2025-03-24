import NavigationItem from "../UI/NavigationItem";
import styles from "./SideBar.module.css";

export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.workspace}>
                <div className={styles.user}>
                    <div className={styles.avatar}>
                        <img src='/images/avatars/Avatar.webp' alt='avatar' />
                    </div>
                    <div className={styles.name}>
                        <span>Intellisys</span>
                        <span className={styles.members}>12 members</span>{" "}
                    </div>
                </div>
                <div className={styles.user_icon}>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M12 6.66667L8.4714 10.1953C8.21106 10.4556 7.78895 10.4556 7.5286 10.1953L4 6.66667'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </div>
            <div className={styles.general}>
                <div className={styles.heading}>General</div>
                <div className={styles.list}>
                    <NavigationItem
                        img='/images/icons/search.svg'
                        badge_sign='⌘ '
                        badge_letter='S'
                    >
                        Search
                    </NavigationItem>
                    <NavigationItem img='/images/icons/credit-card.svg'>
                        Billing
                    </NavigationItem>
                </div>
            </div>
            <div className={styles.projects}>
                <div className={styles.heading}>Projects</div>
                <div className={styles.list}>
                    <NavigationItem img='/images/icons/green-square.svg' active>
                        Orbital Oddysey
                    </NavigationItem>
                    <NavigationItem img='/images/icons/red-triangle.svg'>
                        Digital Product Launch
                    </NavigationItem>
                    <NavigationItem img='/images/icons/orange-square.svg'>
                        Brand Refresh
                    </NavigationItem>
                    <NavigationItem img='/images/icons/blue-octagon.svg'>
                        Social Media Strategy
                    </NavigationItem>
                    <NavigationItem
                        img='/images/icons/plus-in-circle.svg'
                        style={{ color: "var(--neutral)" }}
                    >
                        Add new project
                    </NavigationItem>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <img
                                src='/images/avatars/Avatar2.webp'
                                alt='avatar'
                            />
                            <div className={styles.status}></div>
                        </div>
                        <div className={styles.name}>
                            <span>Ryan Lee</span>
                            <span className={styles.members}>Premium</span>
                        </div>
                    </div>
                    <div className={styles.user_icon}>
                        <svg
                            width='18'
                            height='20'
                            viewBox='0 0 18 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M9 8C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8Z'
                                stroke='#686B6E'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M3.90136 4.7469C2.96492 4.20624 1.76749 4.52709 1.22684 5.46353L1.1851 5.53583C0.644237 6.47263 0.965207 7.67051 1.902 8.21137L2.1448 8.35155C2.71742 8.68215 3 9.3388 3 10C3 10.6612 2.71742 11.3179 2.1448 11.6485L1.902 11.7886C0.965208 12.3295 0.644237 13.5274 1.1851 14.4642L1.22684 14.5365C1.7675 15.4729 2.96492 15.7938 3.90136 15.2531L4.14546 15.1122C4.71803 14.7816 5.42331 14.863 5.9953 15.1946C6.56711 15.526 7 16.1005 7 16.7614V17.0427C7 18.1237 7.8763 19 8.95728 19H9.04273C10.1237 19 11 18.1237 11 17.0427V16.7614C11 16.1005 11.4329 15.5261 12.0047 15.1946C12.5767 14.863 13.282 14.7816 13.8545 15.1122L14.0986 15.2531C15.0351 15.7938 16.2325 15.4729 16.7732 14.5365L16.8149 14.4642C17.3558 13.5274 17.0348 12.3295 16.098 11.7886L15.8552 11.6485C15.2826 11.3179 15 10.6612 15 10C15 9.3388 15.2826 8.68215 15.8552 8.35155L16.098 8.21137C17.0348 7.6705 17.3558 6.47262 16.8149 5.53581L16.7732 5.46353C16.2325 4.52709 15.0351 4.20623 14.0986 4.74689L13.8545 4.88783C13.282 5.2184 12.5767 5.13699 12.0047 4.80541C11.4329 4.47395 11 3.89952 11 3.23859V2.95728C11 1.8763 10.1237 1 9.04273 1L8.95728 1C7.8763 1 7 1.8763 7 2.95727V3.23858C7 3.89952 6.56711 4.47395 5.9953 4.80542C5.42331 5.13699 4.71803 5.2184 4.14546 4.88783L3.90136 4.7469Z'
                                stroke='#686B6E'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </aside>
    );
}
