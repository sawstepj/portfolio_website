import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Navbar from "./navbar";
import React, { useState, useEffect } from "react";
import anime from "animejs";

export default function Landing() {
  useEffect(() => {
    // target all components in the return statement with anime.js
    // Create ease in animation for all elements in the return statement
    anime({
      targets: "section",
      translateY: [0, 50],
      opacity: [0, 1],
      easing: "easeInOutQuart",
      duration: 1000,
      delay: anime.stagger(400),
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.scrollContainer}>
          <div className={styles.home}>
            <section id="home">
              <Home />
            </section>
            {/* about section that the page focuses on when the link to about section is clicked on */}
            <div>
              <section className={styles.about} id="about">
                <About />
              </section>
            </div>
            {/* contact section that the page focuses on when the link to contact section is clicked on */}
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
