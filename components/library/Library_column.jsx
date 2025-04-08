import styles from "./Library_column.module.css";
import Library_Item from "./Library_item";

export default function Library_column({ items }) {
    return (
        <div className={styles.column}>
            <div className={styles.items}>
                {items.map((item) => (
                    <Library_Item item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
