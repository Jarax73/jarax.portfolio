"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";


export default function Links() {
    const pathname = usePathname();
  console.log(pathname)
  return (
    <header>
        <ul>
            <li><Link href="/" className={pathname === "/" && "active"}>Accueil</Link></li>
            <li><Link href="about" className={pathname === "/about" && "active"}>À Propos</Link></li>
            <li><Link href="tools" className={pathname === "/tools" && "active"}>Outils</Link></li>
            <li><Link href="projects" className={pathname === "/projects" && "active"}>Projets</Link></li>
        </ul>
    </header>
  )
}
