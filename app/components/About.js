import Link from "next/link";
import CardCarousel from "../about/components/CardCarousel";
import styles from "../about/about.module.css";
import btn from "../ui/button.module.css";

export default function About() {
  return (
    <section className={`page section ${styles.about}`} id="about">
      <span className="section_label">À propos</span>
      <h2 className="section_title">Qui suis-je ?</h2>
      <p className="section_subtitle">
        Développeur passionné, toujours en quête de nouveauté et
        d&apos;innovation.
      </p>

      <div className={styles.layout}>
        <CardCarousel />
        <Link
          href="/cv-FrenchKapila_Jared.pdf"
          target="_blank"
          className={`${btn.button} ${btn.primary} ${styles.cv_button}`}
        >
          Voir mon CV
        </Link>
      </div>
    </section>
  );
}
