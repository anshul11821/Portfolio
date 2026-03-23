"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import CountUp from "./CountUp";
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                data-hover="stat"
              >
                <span className={styles.statNumber}>
                  <CountUp to={2.5} suffix="+" />
                </span>
                <span className={styles.statLabel}>Years Experience</span>
              </motion.div>

              <motion.div 
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                data-hover="stat"
              >
                <span className={styles.statNumber}>
                  <CountUp to={35} suffix="%" />
                </span>
                <span className={styles.statLabel}>Render Improvement</span>
              </motion.div>

              <motion.div 
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                data-hover="stat"
              >
                <span className={styles.statNumber}>
                  <CountUp to={10} suffix="+" />
                </span>
                <span className={styles.statLabel}>Projects Shipped</span>
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
                  <span>Currently focused on</span>
                </div>
                <h3>Advanced React & AI Agent Integration</h3>
                <p>Building scalable web architectures with modern neuro-symbolic AI using LangGraph & LangChain.</p>

                <div className={styles.techPills}>
                  {["LangGraph", "React.js", "FastAPI"].map((t, i) => (
                    <motion.span
                      key={t}
                      className={styles.techPill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.07 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
