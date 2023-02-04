import Link from 'next/link';
import styles from "../styles/Home.module.css";
import anime from "animejs";

export default function About() {

  return (
    <div className={styles.grid}>
      <h1
        style={{
          fontSize: "20rem",
          textAlign: "center",
        }}>About</h1>
      <p>This is the about page</p>
      <Link href="#contact">Go to contact section</Link>
    </div>
  );
}
