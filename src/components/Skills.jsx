"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import SkillSphere from "./3d/SkillSphere";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Skills</span>
        <h2 className="section-title">Technical Proficiency</h2>

        <div className={styles.container}>
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div 
              key={category}
              className={styles.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.skillsGrid}>
                {items.map((skill, idx) => (
                  <motion.div 
                    key={skill} 
                    className={styles.skillItem}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, color: "var(--accent)", borderColor: "var(--accent)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.05 }}
                    data-hover="skill"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <SkillSphere />
      </motion.div>
    </section>
  );
}
