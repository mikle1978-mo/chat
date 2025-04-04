import MenuItem from "./MenuItem";
import styles from "./MenuColumn.module.css";

export default function MenuColumn({ item }) {
    return (
        <div className={styles.column}>
            <div className={styles.heading}>
                <div className={styles.icon}>
                    <img src={item.columnIcon} alt='icon' />
                </div>
                <h2>{item.columnName}</h2>
            </div>
            <div className={styles.list}>
                {item.links.map((link, index) => (
                    <MenuItem key={index} linkUrl={link.linkUrl}>
                        {link.linkName}
                    </MenuItem>
                ))}
            </div>
        </div>
    );
}
