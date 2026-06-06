import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiWordpress,
} from "react-icons/si";
import styles from "../tools/tools.module.css";

const mastered = [
  { icon: SiHtml5, label: "HTML", color: "#E34F26" },
  { icon: SiCss3, label: "CSS", color: "#1572B6" },
  { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiFigma, label: "Figma", color: "#F24E1E" },
  { icon: SiWordpress, label: "WordPress", color: "#21759B" },
  { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiExpress, label: "Express", color: "#ffffff" },
  { label: "SQL", color: "#336791" },
  { icon: SiReact, label: "React Native", color: "#61DAFB" },
];

export default function Tools() {
  return (
    <section className={`page section ${styles.tools}`} id="tools">
      <span className="section_label">Stack</span>
      <h2 className="section_title">Outils & technologies</h2>
      <p className="section_subtitle">
        Les technologies que j&apos;utilise au quotidien pour concevoir des
        applications web et mobiles.
      </p>

      <div className={styles.grid}>
        <div className={styles.column}>
          <h3 className={styles.column_title}>Maîtrisés</h3>
          <div className={styles.badges}>
            {mastered.map(({ icon: Icon, label, color }) => (
              <span key={label} className={styles.badge}>
                {Icon && <Icon color={color} size={18} />}
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.column_title}>Apprentissage continu</h3>
          <div className={styles.learn_card}>
            <p>
              Je peux apprendre tout ce qui est nécessaire pour la réalisation
              de votre projet. Le plus important n&apos;est pas de chercher à
              savoir si je fais du C ou du Java, mais plutôt de se demander si
              je peux résoudre le problème que vous avez. Alors lancez-moi un
              défi !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
