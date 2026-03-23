"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";

function SpotlightCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mouse-x", `50%`);
    card.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-hover="project"
    >
      {/* Spotlight glow that follows mouse */}
      <div className={styles.spotlight} />

      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>0{index + 1}</span>
        <div className={styles.links}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIcon}
              data-cursor-label="Visit"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{project.title}</h3>
      </div>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((h, idx) => (
          <li key={idx} className={styles.highlight}>{h}</li>
        ))}
      </ul>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

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
            <SpotlightCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
