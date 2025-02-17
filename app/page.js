"use client";
import Image from "next/image";
import styles from "./home.module.css";
import About from "./about/page";
import { useEffect } from "react";

export default function Home() {
  const prompt = () => alert("Working on it...");
  console.log("here", window.location.hash);

  return (
    <>
      <section className={styles.homepage} id="home">
        <Image
          className={styles.home_image}
          src="/images/home.png"
          alt="Jarax"
          width={480}
          height={550}
        />

        <div className={styles.description}>
          <div>
            <h1>Kapila Jared-Alexandre</h1>
            <h2>Développeur web et mobile</h2>
          </div>
          <p>
            Je conçois des applications web et mobiles accessibles pour tous
            types d'écrans.
          </p>
          <button className={styles.button} onClick={prompt}>
            Contactez-moi
          </button>
        </div>
      </section>
      <About />
    </>
  );
}
