"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../components/Logo";
import navStyles from "./nav.module.css";

const links = [
  { href: "#home", id: "home", label: "Accueil" },
  { href: "#about", id: "about", label: "À propos" },
  { href: "#tools", id: "tools", label: "Outils" },
  { href: "#projects", id: "projects", label: "Projets" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.id);

export default function Links() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    active === id
      ? `${navStyles.nav_link} ${navStyles.nav_link_active}`
      : navStyles.nav_link;

  const handleClick = () => setIsOpen(false);

  return (
    <header
      className={`${navStyles.header} ${scrolled ? navStyles.header_scrolled : ""}`}
    >
      <div className={navStyles.inner}>
        <a href="#home" className={navStyles.logo}>
          <Logo size={28} />
          <span className={navStyles.logo_text}>
            Jar<span>ax</span>
          </span>
        </a>

        <nav className={navStyles.nav}>
          {links.map(({ href, id, label }) => (
            <a key={id} href={href} className={linkClass(id)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className={navStyles.menu_button}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={navStyles.mobile_menu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav className={navStyles.mobile_nav}>
              {links.map(({ href, id, label }) => (
                <a
                  key={id}
                  href={href}
                  className={linkClass(id)}
                  onClick={handleClick}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
