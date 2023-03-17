import Link from "next/link";
import styles from "../styles/Home.module.css";
import anime from "animejs";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.grid}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <div className={styles.sawyerHeadshotWrapper}>
          <Image
            src="/Sawyer Headshot.png"
            alt="Picture of the website author"
            width={300}
            height={300}
            className={styles.sawyerHeadshot}
          />
        </div>
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

// Q; How do I add a background border to the Image component with css?
// A: I added a div wrapper around the Image component and added a border to the div