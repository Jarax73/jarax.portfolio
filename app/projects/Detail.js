"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import Link from "next/link";

export function Detail({ detail }) {
  const [click, setClick] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const viewDetails = () => setClick(!click);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={!click ? styles.project : styles.detail}
      style={click ? { backgroundColor: detail.color } : {}}
    >
      <div className={!click ? styles.presentation : styles.detail_view}>
        <div className={styles.up}>
          <p onClick={viewDetails}>Retour</p>
          <Image
            src={isMobile ? detail.mobileImage : detail.image}
            alt={detail.title}
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
                <button
                  type="button"
                  className={styles.button}
                  onClick={viewDetails}
                >
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
            <div className={detail.info_supp !== "" ? styles.tooltip : null}>
              {detail.info_supp !== "" && <p>?</p>}
              <p className={styles.tooltiptext}>{detail.info_supp}</p>
            </div>
            <Link className={styles.clickable} href="/contact">
              <Phone size={35} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
