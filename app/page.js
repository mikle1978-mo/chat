import styles from "./page.module.css";
import MenuColumn from "@/components/MenuColumn";
import { menu } from "@/lib/menu";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>Innovation Starter Pack</h1>
                <span>
                    Kickstart your innovation process with our comprehensive
                    selection of predefined prompts.
                </span>
            </div>
            <section className={styles.menu}>
                {menu.map((item, index) => (
                    <MenuColumn key={index} item={item} />
                ))}
            </section>
        </main>
    );
}
