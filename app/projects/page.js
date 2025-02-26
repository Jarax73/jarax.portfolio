import styles from "./projects.module.css";
import { Detail } from "./Detail";

const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  return (
    <section className={styles.projects}>
      {data.map((detail) => (
        <Detail detail={detail} key={detail.id} />
      ))}
    </section>
  );
}
