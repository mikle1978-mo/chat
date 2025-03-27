import styles from "./NavigationItem.module.css";

export default function NavigationItem({ children, active, ...props }) {
    return (
        <div
            className={`${styles.navigationitem} ${
                active ? styles.activeItem : ""
            }`}
        >
            <div className={styles.label} style={props.style}>
                <div className={styles.icons_wrapper}>
                    {props.img && (
                        <img
                            src={props.img}
                            alt='icon'
                            className={styles.icons}
                        />
                    )}
                </div>
                {children}
            </div>
            {props.badge_sign && (
                <div className={styles.badge}>
                    <span className={styles.sign}>{props.badge_sign}</span>
                    <span>{props.badge_letter}</span>
                </div>
            )}
        </div>
    );
}
