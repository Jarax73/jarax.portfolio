import styles from "../contact/contact.module.css";
import { SiFacebook, SiGmail, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section className={`page section ${styles.contact}`} id="contact">
      <span className="section_label">Contact</span>
      <h2 className="section_title">Travaillons ensemble</h2>
      <p className="section_subtitle">
        Vous avez exploré mon portfolio — maintenant, c&apos;est à vous
        d&apos;agir.
      </p>

      <div className={styles.layout}>
        <p className={styles.message}>
          Contactez-moi pour discuter d&apos;un projet, d&apos;une collaboration
          ou simplement pour échanger. Je serai ravi de collaborer avec vous.
        </p>

        <div className={styles.socials}>
          <a
            href="https://m.me/jared.kapila"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_link}
            title="Facebook Messenger"
          >
            <SiFacebook size={28} color="#1877F2" />
          </a>
          <a
            href="https://wa.me/243813870415"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_link}
            title="WhatsApp"
          >
            <SiWhatsapp size={28} color="#25D366" />
          </a>
          <a
            href="mailto:jaraxkapila73@gmail.com"
            className={styles.social_link}
            title="Email"
          >
            <SiGmail size={24} color="#EA4335" />
          </a>
        </div>
      </div>
    </section>
  );
}
