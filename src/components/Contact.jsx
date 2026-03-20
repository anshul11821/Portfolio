"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert("Something went wrong, please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>

        <div className={styles.grid}>
          <div className={styles.infoSide}>
            <p className={styles.text}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className={styles.contacts}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <div className={styles.label}>Email</div>
                  <div className={styles.value}>{personalInfo.email}</div>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className={styles.contactItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <div className={styles.label}>Phone</div>
                  <div className={styles.value}>{personalInfo.phone}</div>
                </div>
              </a>
              
              <div className={styles.socials}>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Linkedin size={24} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formSide}>
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form 
                  key="contact-form"
                  ref={form}
                  className={styles.form} 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className={styles.inputGroup}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Your name" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Your email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Message</label>
                    <textarea name="message" rows="5" placeholder="Your message" required></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isSending}>
                    {isSending ? (
                      <>Sending... <Loader2 size={18} className={styles.spinner} /></>
                    ) : (
                      <>Send Message <Send size={18} /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CheckCircle size={60} color="var(--accent)" />
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out, Anshul will get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      
      <footer className={styles.footer}>
        <p>Built with Next.js, Three.js & Framer Motion</p>
        <p>© 2026 {personalInfo.name}</p>
      </footer>
    </section>
  );
}
