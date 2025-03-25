import styles from "./MenuItem.module.css";

export default function MenuItem({ children, linkUrl }) {
    return (
        <>
            <a href={linkUrl} className={styles.item}>
                {children}
                <svg
                    width='14'
                    height='10'
                    viewBox='0 0 14 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M13 5L9 1M13 5L9 9M13 5L1 5'
                        stroke='#686B6E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </a>
        </>
    );
}
