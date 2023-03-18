import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.grid}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p>
          <span>
            This is the contact page. Here is my Email and Phone Number
          </span>
        </p>
      </div>
    </div>
  );
}
