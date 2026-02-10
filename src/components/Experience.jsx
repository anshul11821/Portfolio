"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Experience</span>
        <h2 className="section-title">My Journey</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div 
              key={`${exp.company}-${exp.role}`}
              className={styles.experienceItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
            >
              <div className={styles.dot} />
              <motion.div 
                className={styles.card}
                whileHover={{ x: 10, borderColor: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.period}>{exp.period}</div>
                </div>
                
                <ul className={styles.list}>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
