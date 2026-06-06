import styles from "../loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
      <p>Chargement...</p>
    </div>
  );
}
