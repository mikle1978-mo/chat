import styles from "./Share.module.css";
import { useState } from "react";

export default function Share({ toggleOpen }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = () => setOpenDropdown(!openDropdown);
    return (
        <div className={styles.share}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <h2>Manage who can view this project</h2>
                    <img
                        src='/images/icons/cross.svg'
                        alt='icon'
                        onClick={toggleOpen}
                    />
                </div>
                <p>
                    Select which users can access and view this project. Only
                    users with access can view and edit the project.
                </p>
            </div>
            <div className={styles.users}>
                <div className={styles.input}>
                    <div className={styles.chips}>
                        <div className={styles.chip}>
                            <div className={styles.avatar}>
                                <img
                                    src='/images/avatars/Avatar7.png'
                                    alt='avatar'
                                />
                            </div>
                            <span>Sophia Zhang</span>
                            <img
                                src='/images/icons/cross_small.svg'
                                alt='icon'
                            />
                        </div>
                        <div className={styles.chip}>
                            <div className={styles.avatar}>
                                <img
                                    src='/images/avatars/Avatar8.png'
                                    alt='avatar'
                                />
                            </div>
                            <span>Sophia Zhang</span>
                            <img
                                src='/images/icons/cross_small.svg'
                                alt='icon'
                            />
                        </div>
                    </div>
                    <div className={styles.trail} onClick={toggleDropdown}>
                        <span>can edit</span>
                        <svg
                            width='12'
                            height='12'
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
                    {openDropdown && (
                        <div className={styles.input_dropdown}>
                            <div className={styles.dropdown_heading}>Users</div>
                            <div className={styles.dropdown_label}>
                                <div className={styles.user_avatar}>
                                    <img
                                        src='/images/avatars/MarcusChen.png'
                                        alt='avatar'
                                    />
                                </div>
                                <div className={styles.user_name}>
                                    <span>Marcus Chen</span>
                                    <span>@marc</span>
                                </div>
                            </div>
                            <div className={styles.dropdown_label}>
                                <div className={styles.user_avatar}>
                                    <img
                                        src='/images/avatars/AvaGupta.png'
                                        alt='avatar'
                                    />
                                </div>
                                <div className={styles.user_name}>
                                    <span>Ava Gupta</span>
                                    <span>@avyavy</span>
                                </div>
                            </div>
                            <div className={styles.dropdown_label}>
                                <div className={styles.user_avatar}>
                                    <img
                                        src='/images/avatars/LucasOrtiz.png'
                                        alt='avatar'
                                    />
                                </div>
                                <div className={styles.user_name}>
                                    <span>Lucas Ortiz</span>
                                    <span>@luckyluc</span>
                                </div>
                            </div>
                            <div className={styles.dropdown_label}>
                                <div className={styles.user_avatar}>
                                    <img
                                        src='/images/avatars/MiaPark.png'
                                        alt='avatar'
                                    />
                                </div>
                                <div className={styles.user_name}>
                                    <span>Mia Park</span>
                                    <span>@cute-mia</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button className={styles.button}>
                    <span>Invite</span>
                    <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M6.73084 11.2692L16.2337 1.76642M2.48664 4.99807L14.1349 1.11532C15.8344 0.54883 17.4512 2.16564 16.8847 3.8651L13.0019 15.5134C12.3895 17.3507 9.86133 17.5304 8.9952 15.7981L7.05483 11.9174C6.84447 11.4967 6.50334 11.1555 6.08263 10.9452L2.20188 9.0048C0.469619 8.13866 0.64929 5.61052 2.48664 4.99807Z'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div className={styles.list}>
                <div className={styles.user}>
                    <div className={styles.label}>
                        <div className={styles.user_avatar}>
                            <img
                                src='/images/avatars/Avatar2.webp'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.user_name}>
                            <span>You</span>
                            <span>@ryan</span>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.owner}>Owner</span>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.label}>
                        <div className={styles.user_avatar}>
                            <img
                                src='/images/avatars/MiaPark.png'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.user_name}>
                            <span>Mia Park</span>
                            <span>@cute-mia</span>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.editor}>Editor</span>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.label}>
                        <div className={styles.user_avatar}>
                            <img
                                src='/images/avatars/IsabellaChen.png'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.user_name}>
                            <span>IsabellaChen</span>
                            <span>@issa</span>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.editor}>Editor</span>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.label}>
                        <div className={styles.user_avatar}>
                            <img
                                src='/images/avatars/AndrewGarcia.png'
                                alt='avatar'
                            />
                        </div>
                        <div className={styles.user_name}>
                            <span>Andrew Garcia</span>
                            <span>@garci28</span>
                        </div>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.viewer}>Viewer</span>
                    </div>
                </div>
                <div className={styles.listBtn}>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M9 5.66667V9M9 9V12.3333M9 9H12.3333M9 9H5.66667M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                        />
                    </svg>
                    <span>and 5 more others</span>
                </div>
            </div>
            <div className={styles.link}>
                <div className={styles.link_access}>
                    <img src='/images/icons/globe-02.svg' alt='icon' />
                    <span className={styles.placeholder}>
                        Anyone with the link
                    </span>
                    <div className={styles.dropdown}>
                        <span>can view</span>
                        <svg
                            width='12'
                            height='12'
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
                <div className={styles.link_copy}>
                    <svg
                        width='7'
                        height='12'
                        viewBox='0 0 19 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M6 12L12 6M11.3171 14.227L9.72614 15.818V15.818C7.96878 17.5754 5.11954 17.5754 3.36218 15.818L2.45406 14.9099C0.696699 13.1525 0.696699 10.3033 2.45406 8.54594V8.54594L4.04505 6.95495M14.4991 11.045L16.0901 9.45406V9.45406C17.8475 7.6967 17.8475 4.84746 16.0901 3.0901L15.182 2.18198C13.4246 0.424621 10.5754 0.424621 8.81802 2.18198V2.18198L7.22703 3.77297'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <span>Copy Link</span>
                </div>
            </div>
        </div>
    );
}
