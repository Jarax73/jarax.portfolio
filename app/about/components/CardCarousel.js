"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../about.module.css";
import Link from "next/link";

const link = (
  <Link href={"https://kadea.academy"} className={styles.link}>
    Kadea Academy
  </Link>
);

const cards = [
  {
    description: `🚀 Ma passion pour le développement informatique m’a toujours poussé à apprendre et à évoluer. C’est en rejoignant la `,
    description1:
      "que j’ai acquis les bases du développement web et mobile à travers des projets concrets et engageants.",
    description2:
      "💡 Plus qu’une simple formation, cette expérience m’a appris une leçon essentielle : ne pas me limiter à une technologie, mais comprendre la logique qui se cache derrière. ",
    description3:
      "Aujourd’hui, je peux m’adapter rapidement à n’importe quel outil.",
    description4:
      "🎸 En dehors du code, je suis passionné par la musique, la guitare et le football. Et quand je ne suis pas devant mon écran, je plonge dans les dernières tendances tech et scientifiques. Toujours en quête de nouveauté et d’innovation !",
  },
  {
    title: "Carte 2",
    description:
      "💡 Un développeur grandit grâce aux projets. Chaque ligne de code, chaque défi technique est une opportunité d’apprentissage.",
    description1:
      "En tant que développeur, je ne veux pas me contenter d’attendre les opportunités : je veux les créer.",
    description2:
      "Passionné par le développement, je m’efforce de toujours travailler sur de nouveaux projets, que ce soit en reproduisant des maquettes inspirantes ou en explorant des idées innovantes.",
    description3:
      "🔥 Mon objectif ? Évoluer constamment, affiner mes compétences et rester en mouvement pour cultiver ma passion du code.",
  },
];

export default function CardCarousel() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className={styles.description_container}>
      <div className={styles.description}>
        <p className={styles.text}>
          {cards[index].description} {link} {cards[index].description1}
        </p>
        <p className={styles.text}>{cards[index].description2}</p>
        <p className={styles.text}>{cards[index].description3}</p>
        {/* <p className={styles.text}>{cards[index].description4}</p> */}
      </div>
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className={styles.description}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.text}>
            {cards[index].description} {link} {cards[index].description1}
          </p>
          <p className={styles.text}>{cards[index].description2}</p>
          <p className={styles.text}>{cards[index].description3}</p>
          <p className={styles.text}>{cards[index].description4}</p>
        </motion.div>
      </AnimatePresence> */}

      {/* <div className={styles.chevrons_container}>
        <button className={styles.chevrons} onClick={prevCard}>
          <ChevronLeft size={30} />
        </button>
        <button className={styles.chevrons} onClick={nextCard}>
          <ChevronRight size={30} />
        </button>
      </div> */}
    </div>
  );
}
