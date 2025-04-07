import Image from "next/image";
import styles from "./Avatar.module.css";

export default function Avatar({ avatar, online }) {
    return (
        <div className={styles.avatar}>
            <Image src={avatar} alt='avatar' width={48} height={48} />
            {online && <div className={styles.online}></div>}
        </div>
    );
}
