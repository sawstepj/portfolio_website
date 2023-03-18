import Link from "next/link";
import styles from "../styles/Home.module.css";
import NameSVG from "./NameSVG";

export default function Home() {
  const h2FontColor = "#64ffda";

  return (
    <div className={styles.home}>
      <div
        // inline style to center the svg
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NameSVG />
      </div>
      <div className={styles.grid}>
        {/* change the style class for this h1 */}
        <h1 className={styles.sectionTitle}>Welcome to My Portfolio</h1>
        <p>I built this website to showcase my past and current projects and as a way to contact me</p>
      </div>
    </div>
  );
}
