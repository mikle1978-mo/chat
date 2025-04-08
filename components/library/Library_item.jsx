import styles from "./Library_item.module.css";
import Users from "../UX/Users";
import { users } from "@/lib/users";
import Image from "next/image";

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
                                    src={img}
                                    alt='attachment'
                                    width={300}
                                    height={300}
                                />
                                <div className={styles.imageBtn}>
                                    <svg
                                        width='6'
                                        height='12'
                                        viewBox='0 0 6 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M4.33341 2.25008C4.33341 2.98646 3.73646 3.58341 3.00008 3.58341C2.2637 3.58341 1.66675 2.98646 1.66675 2.25008C1.66675 1.5137 2.2637 0.916748 3.00008 0.916748C3.73646 0.916748 4.33341 1.5137 4.33341 2.25008ZM4.33341 9.75008C4.33341 10.4865 3.73646 11.0834 3.00008 11.0834C2.2637 11.0834 1.66675 10.4865 1.66675 9.75008C1.66675 9.0137 2.2637 8.41675 3.00008 8.41675C3.73646 8.41675 4.33341 9.0137 4.33341 9.75008Z'
                                            fill='#CDCECF'
                                            stroke='#CDCECF'
                                            strokeWidth='1.5'
                                        />
                                    </svg>
                                </div>
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
