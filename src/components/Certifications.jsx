"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award, Calendar, ExternalLink } from "lucide-react";
import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Achievements</span>
        <h2 className="section-title">Certifications</h2>

        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className={styles.certCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -5,
                borderColor: "var(--accent)",
                boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)"
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className={styles.iconContainer}>
                <Award className={styles.icon} size={32} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <div className={styles.meta}>
                  <Calendar size={14} />
                  <span>{cert.period}</span>
                </div>
                {cert.description && (
                  <p className={styles.description}>{cert.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
