"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import AboutScene from "./3d/AboutScene";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title">Who I Am</h2>

        <div className={styles.aboutGrid}>
          <div className={styles.textSide}>
            <p>{personalInfo.summary}</p>
          </div>
          
          <div className={styles.visualSide}>
            <AboutScene />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
