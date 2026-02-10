"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/portfolio";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span>AC</span>
          </div>

          <div className={styles.links}>
            {navLinks.map((link) => (
              <button key={link.href} className={styles.link} onClick={() => scrollTo(link.href)}>
                {link.label}
              </button>
            ))}
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <button key={link.href} className={styles.mobileLink} onClick={() => scrollTo(link.href)}>
            {link.label}
          </button>
        ))}
      </div>
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.open : ""}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
