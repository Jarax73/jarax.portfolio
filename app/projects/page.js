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
  console.log("data", data);
  return (
    <section className={styles.projects}>
      {data.map((detail) => (
        <Detail detail={detail} key={detail.id} />
      ))}
      {/* <div className={!click ? styles.project : styles.detail}>
        <div className={!click ? styles.presentation : styles.detail_view}>
          <div className={styles.up}>
            <p onClick={viewDetails}>Retour</p>
            <Image
              src="/images/jsquiz.png"
              alt="Js Quiz"
              width={2300}
              height={4200}
              className={styles.image}
            />
          </div>
          <div className={styles.down}>
            <div className={styles.description}>
              <h1 className={styles.title}>
                <span>01</span>JavaScript Quiz
              </h1>
              <p className={styles.details}>
                To master the basics of JavaScript, I had to do this exercise,
                which involved creating an SPA with Vanilla JavaScript. The aim
                of the application is to test the elementary level of the
                language by asking questions related to the basics of the
                language.
              </p>
              <div className={styles.button_container}>
              {!click ? <button className={styles.button} onClick={viewDetails}>Voir</button> :
              <button className={styles.button}>Visite</button>}
              </div>
            </div>
            <div className={styles.aside}>
              <Phone />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.presentation}>
          <Image
            src="/images/music.png"
            alt="Js Quiz"
            width={1300}
            height={1200}
            className={styles.image}
          />
          <div className={styles.description}>
            <h1 className={styles.title}>
              <span>02</span>Music Application
            </h1>
            <div className={styles.button_container}>
              {!click ? <button className={styles.button} onClick={viewDetails}>Voir</button> :
              <button className={styles.button}>Visite</button>}
              </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.presentation}>
          <Image
            src="/images/gravity.png"
            alt="Js Quiz"
            width={1300}
            height={1200}
            className={styles.image}
          />
          <div className={styles.description}>
            <h1 className={styles.title}>
              <span>03</span>Gravity Team
            </h1>
            <div className={styles.button_container}>
              {!click ? <button className={styles.button} onClick={viewDetails}>Voir</button> :
              <button className={styles.button}>Visite</button>}
              </div>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.presentation}>
          <Image
            src="/images/litcollective.png"
            alt="Js Quiz"
            width={1300}
            height={1200}
            className={styles.image}
          />
          <div className={styles.description}>
            <h1 className={styles.title}>
              <span>04</span>LitCollective
            </h1>
            <div className={styles.button_container}>
              {!click ? <button className={styles.button} onClick={viewDetails}>Voir</button> :
              <button className={styles.button}>Visite</button>}
              </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
