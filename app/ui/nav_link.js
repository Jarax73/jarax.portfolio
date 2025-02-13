"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Links() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <header>
      <ul className="large_screen">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : "link"}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="about"
            className={pathname === "/about" ? "active" : "link"}
          >
            À Propos
          </Link>
        </li>
        <li>
          <Link
            href="tools"
            className={pathname === "/tools" ? "active" : "link"}
          >
            Outils
          </Link>
        </li>
        <li>
          <Link
            href="projects"
            className={pathname === "/projects" ? "active" : "link"}
          >
            Projets
          </Link>
        </li>
      </ul>

      <div className={`mobile ${isOpen && "z"}`}>
        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="motion"
          >
            <ul>
              <li>
                <Link href="/" className={pathname === "/" ? "active" : "link"}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="about"
                  className={pathname === "/about" ? "active" : "link"}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="tools"
                  className={pathname === "/tools" ? "active" : "link"}
                >
                  Outils
                </Link>
              </li>
              <li>
                <Link
                  href="projects"
                  className={pathname === "/projects" ? "active" : "link"}
                >
                  Projets
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}
