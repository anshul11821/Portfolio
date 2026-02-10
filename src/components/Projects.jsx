"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Projects</span>
        <h2 className="section-title">What I've Built</h2>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.15)",
                borderColor: "var(--accent)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              data-hover="project"
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.links}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className={styles.description}>{project.description}</p>
              
              <ul className={styles.highlights}>
                {project.highlights.map((h, idx) => (
                  <li key={idx} className={styles.highlight}>{h}</li>
                ))}
              </ul>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
