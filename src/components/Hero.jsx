"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import HeroScene from "./3d/HeroScene";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <HeroScene />
      
      <div className={styles.content}>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.greeting}
        >
          Hi there, my name is
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${styles.name} gradient-text`}
        >
          {personalInfo.name}.
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className={styles.title}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={styles.summary}
        >
          {personalInfo.summary}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.ctas}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.primaryBtn} 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.secondaryBtn} 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={styles.wheel}
          />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
