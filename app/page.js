import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className={styles.homepage}>
              <Image
                  className={styles.home_image}
                  src="/images/home.png"
                  alt="Jarax"
                  width={380}
                  height={238}
                />
        
                <div className={styles.description}>
                  <div><h1>Kapila Jared-Alexandre</h1>
                  <h2>Développeur web et mobile</h2></div>
                  <p>Je conçois des applications web et mobiles accessibles pour tous types d'écrans.</p>
                </div>
            </div>
      </main>
    </div>
  );
}
