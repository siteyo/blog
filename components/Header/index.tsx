import Link from "next/link";
import styles from "./index.module.css";

const Header = () => (
  <header className={styles.header}>
    <Link href="/">blog</Link>
  </header>
);

export { Header };
