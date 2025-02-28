"use client";

import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import CardCarousel from "./components/CardCarousel";

export default function About() {
  const prompt = () => alert("Working on it...");
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.about_title}>À Propos</h1>
      <div className={styles.section}>
        <div className={styles.contact_container}>
          <div className={styles.image_container}>
            <Image
              src="/images/contact.png"
              alt="contact"
              width={400}
              className={styles.image}
              height={550}
            />
            <span className={styles.tooltiptext}>
              📩 Envie d’échanger sur le développement, un projet ou
              l’innovation ?
            </span>
          </div>
          <button type="button" className={styles.button} onClick={prompt}>
            Voir mon CV
          </button>
        </div>

        <CardCarousel />
      </div>
    </section>
  );
}
