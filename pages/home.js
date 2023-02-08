import Link from "next/link";
import styles from "../styles/Home.module.css";
import NameSVG from "./NameSVG";

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
          
        </h2>
        <NameSVG />
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p>I built this website to showcase my past and current projects</p>
        <Link href="#about">Go to about section</Link>
      </div>
    </div>
  );
}
