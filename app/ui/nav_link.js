"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Links() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [identifier, setIdentifier] = useState(null);

  useEffect(() => {
    // if (typeof window !== "undefined" && window.location.hash) {
    //   const id = window.location.hash.substring(1);
    //   setIdentifier(id);
    //   // const element = document.getElementById(id);
    //   console.log("id", id);
    //   // if (element) {
    //   //   element.scrollIntoView({ behavior: "smooth" });
    //   // }
    // }
    setIsOpen(!isOpen);
  }, [pathname]);

  return (
    <header>
      <ul className="large_screen">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "active" : "link"}
            // scroll={false}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : "link"}
            // scroll={false}
          >
            À Propos
          </Link>
        </li>
        <li>
          <Link
            href="/tools"
            className={pathname === "/tools" ? "active" : "link"}
            // scroll={false}
          >
            Outils
          </Link>
        </li>
        <li>
          <Link
            href="projects"
            className={pathname === "/projects" ? "active" : "link"}
            // scroll={false}
          >
            Projets
          </Link>
        </li>
      </ul>

      <div
        className={isOpen ? "mobile" : "burger"}
        // {`mobile ${isOpen && "z"}`}
      >
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
                  href="/about"
                  className={pathname === "/about" ? "active" : "link"}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
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
