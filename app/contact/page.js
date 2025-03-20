import Image from "next/image";
import styles from "./contact.module.css";
import { SiFacebook, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.up}>
        <Image
          src="/images/thatsit.png"
          width={1000}
          height={800}
          className={styles.image}
          priority
        />
        <div className={styles.icons}>
          <a
            href="https://m.me/jared.kapila"
            target="_blank"
            rel="noopener noreferrer"
            title="JA Kap's"
          >
            <SiFacebook size={50} color="#1877F2" />
          </a>
          <a
            href="https://wa.me/243813870415"
            target="_blank"
            rel="noopener noreferrer"
            title="JA Kap's"
          >
            <SiWhatsapp size={50} color="green" />
          </a>
          <a
            href="mailto: jaraxkapila73@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="jaraxkapila73@gmail.com"
            className={styles.gmail}
          >
            <div>
              <SiGmail size={30} color="#D14836" />
            </div>
          </a>
        </div>
      </div>
      <div className={styles.down}>
        <p>
          Vous avez pu explorer mon portfolio et je vous en remercie. Maintenant
          c'est à vous d'agir, contactez-moi ! Dîtes-moi ce que vous en pensez !
          Dîtes-moi sur quel projet nous pouvons travailler ensemble ! Je serai
          ravi de collaborer avec vous 🙂
        </p>
      </div>
    </section>
  );
}
