import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.grid}>
      <h1
        style={{
          fontSize: "10rem",
          textAlign: "center",
        }}
      >
        Contact
      </h1>
      <p>
        <span>This is the contact page</span>
      </p>
      <Link href="#home" scroll={false}>
        Go to home section
      </Link>
    </div>
  );
}
