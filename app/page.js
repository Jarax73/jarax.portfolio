import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
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
          <Link
            href="/contact"
            className={styles.button}
            type="button"
            title="+243813870415"
          >
            Contactez-moi
          </Link>
        </div>
      </section>
      {/* <About />
      <Tools />
      <Projects /> */}
    </>
  );
}
