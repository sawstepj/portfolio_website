import Link from "next/link";
import styles from "../styles/Home.module.css";
import anime from "animejs";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.grid}>
        <h1 className={styles.sectionTitle}>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <span>
              <p>
                Hi! My name is Sawyer Jones.
                <br />
                I recently graduated from Loyola University of Chicago with a
                B.S. in Software Engineering.
                <br />I enjoy building web applications and learning new
                technologies.
              </p>
              <p>
                My most recent experience was an internship working with
                <a
                  style={{
                    color: "#64ffda",
                  }}
                  href="https://www.cerebrum.com/"
                >
                  {" "}
                  Cerebrum Inc.{" "}
                </a>
                as a Software Engineer Intern. I worked closely with the CTO and
                CEO to develop a web application using the Stellar blockchain.
              </p>
              <p>
                This website is my most recent project. I built it using
                <a
                  style={{
                    color: "#64ffda",
                  }}
                  href="https://nextjs.org/"
                >
                  {" "}
                  Next.js{" "}
                </a>
                and
                <a
                  style={{
                    color: "#64ffda",
                  }}
                  href="https://reactjs.org/"
                >
                  {" "}
                  React.js.
                </a>
              </p>
              <p>
                Here is a list of some other technologies I've been using
                recently:
                <ul className={styles.skillsList}>
                  <li>JavaScript</li>
                  <li>
                    <a href="https://stellar.org/developers">StellarSDK</a>
                  </li>
                  <li>
                    <a href="https://www.pinata.cloud/">Pinata</a>
                  </li>
                  <li></li>
                </ul>
              </p>
            </span>
          </div>
          <div className={styles.sawyerHeadshotWrapper}>
            <Image
              src="/Sawyer Headshot.png"
              alt="Picture of the website author"
              width={300}
              height={300}
              className={styles.sawyerHeadshot}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
