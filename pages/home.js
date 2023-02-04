import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {

  const h2FontColor = "#64ffda";

  return (
    <div className={styles.home}>
      <div className={styles.grid}>
        <h2 
          style={{
            color: h2FontColor,
            fontSize: "5rem",
            // marginRight: "10rem",
          }}>
          <span>Sawyer Jones</span>
        </h2>
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p>This is the home section</p>
        <Link href="#about">Go to about section</Link>
      </div>
    </div>
  );
}
