import Link from "next/link";
import styles from "../styles/Home.module.css";
import anime from "animejs";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.grid}>
        <h1
          style={{
            fontSize: "10rem",
            textAlign: "center",
          }}
        >
          About Me
        </h1>
        <p>
          I recently graduated from Loyola University of Chicago with a B.S. in
          Software Engineering
        </p>
        <Link href="#contact" scroll={false}>
          Go to contact section
        </Link>
      </div>
    </div>
  );
}
