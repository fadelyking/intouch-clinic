import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.main}>
            <section className={styles.sectionOne}>
                <div className={styles.sectionOneText}>
                    <p className={styles.sectionOneSubHeader}>
                        A range of programs for healthcare
                    </p>
                    <p className={styles.sectionOneHeader}>Special Touch</p>
                    <p className={styles.sectionOnePara}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto dolores ducimus incidunt similique voluptatum
                        consectetur mollitia pariatur harum!
                    </p>
                    <button className={styles.sectionOneButton}>
                        Make an appointment
                    </button>
                </div>
                <div className={styles.sectionOneImage}>
                    <Image
                        src="/doc.jpg"
                        width={400}
                        height={400}
                        alt="Happy looking doctor"
                    ></Image>
                </div>
            </section>
            <section>{/* Special Touch with image */}</section>
            <section>{/* Special Touch with image */}</section>
            <section>{/* Special Touch with image */}</section>
        </div>
    );
}
