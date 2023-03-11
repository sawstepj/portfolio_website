import Link from "next/link";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import anime from "animejs";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  // target all unordered list items with anime.js
  // Create ease in animation for the navbar that occurs only on page refresh
  useEffect(() => {
    anime({
      targets: "ul li",
      translateY: [0, 50],
      opacity: [0, 1],
      easing: "easeInOutQuart",
      duration: 1000,
      delay: anime.stagger(100),
    });
  }, []);

  const headerClass =
    scroll > 50 ? `${styles.header} ${styles.headerScrolled}` : styles.header;

  return (
    <header className={headerClass}>
      <ul className={styles.navbar}>
        <li>
          <Link href="#home" scroll={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={false}>
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" scroll={false}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
