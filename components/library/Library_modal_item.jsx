import styles from "./Library_modal_item.module.css";
import EditImageButton from "../UI/EditImageButton";

export default function LibraryModalItem({ item }) {
    const dateObj = new Date(item.date);

    const formattedDate = dateObj.toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
    });
    return (
        <div className={styles.modal_item}>
            <time dateTime={item.date}>{formattedDate}</time>
            <div className={styles.images}>
                {item.images.map((image, index) => (
                    <div className={styles.image_wrapper} key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={styles.image}
                        />
                        <EditImageButton image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
