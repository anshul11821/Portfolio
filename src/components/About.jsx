"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
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
            <p className={styles.bioText}>{personalInfo.summary}</p>
            
            <div className={styles.experienceStats}>
              <motion.div 
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className={styles.statNumber}>2.5+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </motion.div>
              <motion.div 
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Projects</span>
              </motion.div>
            </div>
          </div>
          
          <div className={styles.visualSide}>
            <div className={styles.decorativeContainer}>
              <motion.div 
                className={styles.blob}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                  borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className={styles.highlightCard}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "var(--shadow-glow-strong)" }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.dot} />
                  <span>Currently focus on</span>
                </div>
                <h3>Advanced React & AI Agent Integration</h3>
                <p>Building scalable web architectures with modern neuro-symbolic AI.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
