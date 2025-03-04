import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import CardCarousel from "./components/CardCarousel";
import Link from "next/link";

export default function About() {
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
          <Link
            type="button"
            href="/cv-FrenchKapila Jared.pdf"
            target="_blank"
            className={styles.button}
          >
            Voir mon CV
          </Link>
        </div>

        <CardCarousel />
      </div>
    </section>
  );
}
