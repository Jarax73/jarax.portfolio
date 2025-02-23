"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./projects.module.css";
import Link from "next/link";

export function Detail({ detail }) {
  const [click, setClick] = useState(false);
  const viewDetails = () => setClick(!click);
  return (
    <div
      className={!click ? styles.project : styles.detail}
      style={click ? { backgroundColor: detail.color } : {}}
    >
      <div className={!click ? styles.presentation : styles.detail_view}>
        <div className={styles.up}>
          <p onClick={viewDetails}>Retour</p>
          <Image
            src={detail.image}
            alt=""
            width={2300}
            height={4200}
            className={styles.image}
          />
        </div>
        <div className={styles.down}>
          <div className={styles.description}>
            <h1 className={styles.title}>
              <span>0{detail.id}</span>
              {detail.title}
            </h1>
            <p className={styles.details}>{detail.details}</p>
            <div className={styles.button_container}>
              {!click ? (
                <button className={styles.button} onClick={viewDetails}>
                  Voir Maintenant
                </button>
              ) : (
                // <button>
                <Link
                  href={detail.link}
                  target="_blank"
                  className={styles.button}
                >
                  Visiter
                </Link>
                // </button>
              )}
            </div>
          </div>
          <div className={styles.aside}>
            <div className={detail.info_supp !== "" && styles.tooltip}>
              {detail.info_supp !== "" && <p>?</p>}
              <p className={styles.tooltiptext}>{detail.info_supp}</p>
            </div>
            <div className={styles.clickable}>
              <Phone size={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
