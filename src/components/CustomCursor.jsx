"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200, restDelta: 0.001 };
  const springX = useSpring(ringX, springConfig);
  const springY = useSpring(ringY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);

    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 2);
      cursorY.set(e.clientY - 2);
      ringX.set(e.clientX - 12);
      ringY.set(e.clientY - 12);
    };

    const handleHover = (e) => {
      if (e.target.closest('button, a, input, textarea, [data-hover]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className={styles.dot}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: 1
        }}
      />
      <motion.div
        className={styles.ring}
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'var(--accent)' : 'var(--text-muted)',
          backgroundColor: isHovered ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
        }}
      />
    </>
  );
}
