"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname();
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logo}>
                    Logo Image
                </Link>
            </div>
            <div className={styles.links}>
                <Link
                    href="/services"
                    className={`${
                        pathname === "/services"
                            ? styles.activeLink
                            : styles.link
                    }`}
                >
                    Services
                </Link>
                <Link
                    href="/our-team"
                    className={`${
                        pathname === "/our-team"
                            ? styles.activeLink
                            : styles.link
                    }`}
                >
                    Our Team
                </Link>
                <Link
                    href="/about"
                    className={`${
                        pathname === "/about" ? styles.activeLink : styles.link
                    }`}
                >
                    About
                </Link>
                <Link
                    href="/blog"
                    className={`${
                        pathname === "/blog" ? styles.activeLink : styles.link
                    }`}
                >
                    Blog
                </Link>
                <Link
                    href="/contact"
                    className={`${
                        pathname === "/contact"
                            ? styles.activeLink
                            : styles.link
                    }`}
                >
                    Contact
                </Link>
            </div>
            <div>
                <Link href="/book" className={styles.button}>
                    Book
                </Link>
            </div>
        </div>
    );
}

export default Header;
