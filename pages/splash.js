import React from "react";
import styles from "../styles/Home.module.css";

export default function Splash() {
  return (
    <div className={styles.splash}>
       {/* embed Sawyer Jones mp4 video */}
        <video
            autoPlay
            loop
            muted
        >
            <source src="/SawyerJones.mp4" type="video/mp4" />
        </video>
    </div>
  );
}
