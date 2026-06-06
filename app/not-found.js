import Link from "next/link";
import styles from "./not-found.module.css";
import btn from "./ui/button.module.css";

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <span className={styles.code}>404</span>
      <h1>Page introuvable</h1>
      <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" className={`${btn.button} ${btn.primary}`}>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
