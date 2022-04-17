import Link from "next/link";
import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Link href="/" passHref>
          <button className={styles.title}>
            <h2>Penquuin</h2>
          </button>
        </Link>
        <Link href="/about" passHref>
          <button className={styles.sub}>
            <h3>About</h3>
          </button>
        </Link>
      </div>
    </header>
  );
}
