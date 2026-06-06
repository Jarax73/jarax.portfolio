"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "../about.module.css";

const kadeaLink = (
  <Link href="https://kadea.academy" className={styles.link} target="_blank">
    Kadea Academy
  </Link>
);

const cards = [
  {
    paragraphs: [
      <>
        Ma passion pour le développement informatique m&apos;a toujours poussé à
        apprendre et à évoluer. C&apos;est en rejoignant {kadeaLink} que
        j&apos;ai acquis les bases du développement web et mobile à travers des
        projets concrets et engageants.
      </>,
      <>
        Plus qu&apos;une simple formation, cette expérience m&apos;a appris une
        leçon essentielle : ne pas me limiter à une technologie, mais comprendre
        la logique qui se cache derrière. Aujourd&apos;hui, je peux
        m&apos;adapter rapidement à n&apos;importe quel outil.
      </>,
      <>
        En dehors du code, je suis passionné par la musique, la guitare et le
        football. Et quand je ne suis pas devant mon écran, je plonge dans les
        dernières tendances tech et scientifiques.
      </>,
    ],
  },
  {
    paragraphs: [
      <>
        Un développeur grandit grâce aux projets. Chaque ligne de code, chaque
        défi technique est une opportunité d&apos;apprentissage.
      </>,
      <>
        En tant que développeur, je ne veux pas me contenter d&apos;attendre les
        opportunités : je veux les créer. Passionné par le développement, je
        m&apos;efforce de toujours travailler sur de nouveaux projets.
      </>,
      <>
        Mon objectif ? Évoluer constamment, affiner mes compétences et rester en
        mouvement pour cultiver ma passion du code.
      </>,
    ],
  },
];

export default function CardCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className={styles.card}>
      {cards[index].paragraphs.map((paragraph, i) => (
        <p key={i} className={styles.text}>
          {paragraph}
        </p>
      ))}

      <div className={styles.carousel_controls}>
        <div className={styles.dots}>
          {cards.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dot_active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            onClick={prev}
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={next}
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
