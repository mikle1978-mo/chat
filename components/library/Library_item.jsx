import styles from "./Library_item.module.css";
import Users from "../UX/Users";
import { users } from "@/lib/users";
import Image from "next/image";
import EditImageButton from "../UI/EditImageButton";

export default function Library_Item({ item }) {
    return (
        <div className={styles.item}>
            <div className={styles.top}>
                <h2 className={styles.title}>{item.title}</h2>
                <div className={styles.text}>{item.text}</div>
                {item.images.length > 0 && (
                    <div className={styles.images}>
                        {item.images.map((img, index) => (
                            <div key={index} className={styles.image_wrapper}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={300}
                                    height={300}
                                />
                                <EditImageButton image={img} />
                            </div>
                        ))}
                    </div>
                )}{" "}
            </div>
            <div className={styles.line}></div>
            <div className={styles.bottom}>
                <Users users={users} />
                <div className={styles.comments}>
                    {item.comments}
                    <img src='/images/icons/chat-bubble-02.svg' alt='icon' />
                </div>
            </div>
        </div>
    );
}
