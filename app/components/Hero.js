import styles from "../home.module.css";
import btn from "../ui/button.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <p className={styles.greeting}>Bonjour, je suis</p>
        <h1 className={styles.name}>Kapila Jared-Alexandre</h1>
        <h2 className={styles.role}>Développeur web & mobile</h2>
        <p className={styles.bio}>
          Je conçois des applications web et mobiles accessibles, performantes
          et adaptées à tous types d&apos;écrans.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={`${btn.button} ${btn.primary}`}>
            Me contacter
          </a>
          <a href="#projects" className={`${btn.button} ${btn.secondary}`}>
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
