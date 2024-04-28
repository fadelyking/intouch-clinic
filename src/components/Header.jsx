import Link from "next/link";
import styles from "./header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Logo Image</Link>
            </div>
            <div className={styles.links}>
                <Link href="/services" className="link">
                    Services
                </Link>
                <Link href="/our-team" className="link">
                    Our Team
                </Link>
                <Link href="/about" className="link">
                    Abount
                </Link>
                <Link href="/blog" className="link">
                    Blog
                </Link>
                <Link href="/contact" className="link">
                    Contact
                </Link>
            </div>
            <div>
                <Link href="/book" className="link">
                    Book Your Appointment
                </Link>
            </div>
        </div>
    );
}

export default Header;
