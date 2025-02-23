import React from "react";
import styles from "./tools.module.css";
import Image from "next/image";
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

export default function Tools() {
  return (
    <section className={styles.tools} id="tools">
      {/* <Image
        src="/images/tools.png"
        alt=""
        width={750}
        height={800}
        className={styles.image}
      /> */}
      <h1 className={styles.tools_title}>Outils</h1>
      <div className={styles.left}>
        <h2>
          <span className={styles.hide_span}>Les Outils </span>que j'utilise
        </h2>
        <div className={styles.icons}>
          <div className={styles.range}>
            <div className={styles.round} title="HTML5">
              <p>HTML</p>
              <SiHtml5 color="#F22601" size={40} />
            </div>
            <div className={styles.round} title="CSS3">
              <p>CSS</p>
              <SiCss3 color="2062AF" size={40} />
            </div>
            <div className={styles.round} title="Figma">
              <SiFigma color="#80A5D0" size={50} />
            </div>
          </div>
          <div className={styles.range} title="WordPress">
            <div className={styles.round}>
              <SiWordpress color="#80A5D0" size={35} />
              <p>WORDPRESS</p>
            </div>
            <div className={styles.round} title="Git">
              <SiGit color="red" size={40} />
            </div>
          </div>
          <div className={styles.range} title="JavaScript">
            <SiJavascript
              color="#fff"
              size={80}
              className={styles.round}
              style={{ backgroundColor: "#80A5D0" }}
            />
          </div>
          <div className={styles.range}>
            {/* <div className={styles.range} title="Next.js"> */}
            <SiNextdotjs
              color="#fff"
              size={80}
              className={styles.round}
              style={{ backgroundColor: "#80A5D0" }}
            />
            {/* </div> */}
            <div className={styles.round} title="React">
              <SiReact
                color="rgb(0,100,150)"
                size={50}
                className={styles.react}
              />
            </div>
            <div className={styles.round} title="React Native">
              <SiReact color="rgb(0,100,150)" size={40} />
              <p>React Native</p>
            </div>
          </div>
          <div className={styles.range}>
            <div className={styles.round} title="Firebase">
              <SiFirebase color="#80A5D0" size={40} />
            </div>
            <div className={styles.round} title="MongoDB">
              <SiMongodb size={35} />
              <p>MongoDB</p>
            </div>
            <div className={styles.round} title="Express.js">
              <SiExpress size={40} />
            </div>
            <div className={styles.round}>
              <Image
                src="/images/sql.png"
                alt=""
                title="Sql"
                className={styles.sql}
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2>
          <span className={styles.hide_span}>Les Outils </span>que je peux
          apprendre
        </h2>
        <div className={styles.tooltip_container}>
          <div className={styles.tooltip}>
            <p>?</p>
            <span className={styles.tooltiptext}>
              Je peux apprendre tout ce qui est nécessaire pour la réalisation
              de votre projet. Le plus important n’est donc pas de chercher à
              savoir si je fais du C ou du Java, mais plutôt de se demander si
              je peux résoudre le problème que vous avez. Alors lancez-moi un
              défi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
