"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "../projects/projects.module.css";
import { ProjectCard, ProjectModal } from "../projects/Detail";

const data = [
  {
    id: 1,
    image: "/images/landela-lar.png",
    mobileImage: "/images/landela-lar_mobile.png",
    title: "Landela Lar",
    details:
      "Application mobile de gestion des finances personnelles, développée avec React Native et Expo. Suivi des dépenses et budgets en USD et CDF, synchronisation cloud via Supabase, authentification Google, tableaux de bord analytiques et interface bilingue (FR/EN).",
    info_supp: "",
    color: "#0D9488",
    link: "https://play.google.com/apps/testing/com.moneymanager.spendtracker",
  },
  {
    id: 2,
    image: "/images/jsquiz.png",
    mobileImage: "/images/quiz_mobile.png",
    title: "Quiz JavaScript",
    details:
      "Pour maîtriser les bases du JavaScript, j'ai dû faire cet exercice qui consiste à créer une SPA avec Vanilla JavaScript. L'objectif de l'application est de tester le niveau élémentaire du langage en posant des questions relatives aux bases du langage.",
    info_supp: "",
    color: "#04724D",
    link: "https://jarax73.github.io/quiz-javascript/",
  },
  {
    id: 3,
    image: "/images/music.png",
    mobileImage: "/images/music_mobile.png",
    title: "Application de Musique",
    details:
      "Cette application, je l'ai créée dans le but de maîtriser la nouvelle technologie que je venais d'apprendre, Reactjs. J'ai aussi eu à m'exercer avec les APIs, grâce à l'API de Spotify que j'ai utilisé dans cette application.",
    info_supp:
      "Dans cette application, je n'avais pas mis du coeur en ce qui concerne le design ou le responsive. Le but c'était de comprendre comment fonctionne Reactjs et les APIs.",
    color: "#00BCD4",
    link: "https://jrx-music-platform.vercel.app/",
  },
  {
    id: 4,
    image: "/images/gravity.png",
    mobileImage: "/images/gravity_mobile.png",
    title: "Gravity Team",
    details:
      "Ceci est une représentation d'une maquette que j'ai trouvé dans la communauté figma. Il y a plusieurs maquettes dans la série et parmi elles il y avait celle de Gravity Team",
    info_supp: "",
    color: "#001F54",
    link: "https://jarax73.github.io/gravity/",
  },
  {
    id: 5,
    image: "/images/litcollective.png",
    mobileImage: "/images/litcollective_mobile.png",
    title: "LitCollective",
    details:
      "Ceci est une représentation d'une maquette que j'ai trouvé dans la communauté figma. Il y a plusieurs maquettes dans la série et parmi elles il y avait celle de LitCollective",
    info_supp: "",
    color: "#1E3A8A",
    link: "https://jarax73.github.io/litcollective/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className={`page section ${styles.projects}`} id="projects">
      <span className="section_label">Portfolio</span>
      <h2 className="section_title">Mes projets</h2>
      <p className="section_subtitle">
        Une sélection de projets personnels et exercices qui montrent mon
        parcours de développeur.
      </p>

      <div className={styles.grid}>
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
