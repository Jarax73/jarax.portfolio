"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./projects.module.css";
import btn from "../ui/button.module.css";

export function ProjectCard({ project, onOpen }) {
  return (
    <article
      className={styles.card}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      role="button"
      tabIndex={0}
    >
      <div className={styles.card_image_wrapper}>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className={styles.card_image}
        />
      </div>
      <div
        className={styles.card_accent}
        style={{ backgroundColor: project.color }}
      />
      <div className={styles.card_body}>
        <span className={styles.card_number}>
          {String(project.id).padStart(2, "0")}
        </span>
        <h3 className={styles.card_title}>{project.title}</h3>
        <p className={styles.card_desc}>{project.details}</p>
      </div>
    </article>
  );
}

export function ProjectModal({ project, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal_header}>
          <h2 className={styles.modal_title}>{project.title}</h2>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.modal_content}>
          <Image
            src={isMobile ? project.mobileImage : project.image}
            alt={project.title}
            width={1200}
            height={800}
            className={styles.modal_image}
          />
          <div className={styles.modal_info}>
            <p className={styles.modal_desc}>{project.details}</p>
            {project.info_supp && (
              <p className={styles.modal_note}>{project.info_supp}</p>
            )}
            <div className={styles.modal_actions}>
              <Link
                href={project.link}
                target="_blank"
                className={`${btn.button} ${btn.primary}`}
              >
                Visiter
                <ExternalLink size={16} />
              </Link>
              <a href="#contact" className={`${btn.button} ${btn.secondary}`}>
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
