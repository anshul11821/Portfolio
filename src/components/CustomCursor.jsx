"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const trailX = useMotionValue(-200);
  const trailY = useMotionValue(-200);

  const springConfig = { damping: 28, stiffness: 280, restDelta: 0.001 };
  const trailSpringX = useSpring(trailX, springConfig);
  const trailSpringY = useSpring(trailY, springConfig);

  // Glow follows mouse with heavy spring for dreamy lag
  const glowX = useSpring(cursorX, { damping: 60, stiffness: 100 });
  const glowY = useSpring(cursorY, { damping: 60, stiffness: 100 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouchDevice);
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, [data-hover]');
      if (isInteractive) {
        setIsHovered(true);
        const label = isInteractive.getAttribute('data-cursor-label') || '';
        setHoverLabel(label);
      } else {
        setIsHovered(false);
        setHoverLabel('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className={styles.dot}
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClicking ? 0.4 : isHovered ? 0 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring */}
      <motion.div
        className={styles.ring}
        style={{ x: trailSpringX, y: trailSpringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isClicking ? 0.7 : isHovered ? 1.8 : 1,
          opacity: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {hoverLabel && (
          <motion.span
            className={styles.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {hoverLabel}
          </motion.span>
        )}
      </motion.div>

      {/* Ambient glow that lazily follows */}
      <motion.div
        className={styles.glow}
        style={{ x: glowX, y: glowY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isHovered ? 0.8 : 0.5 }}
      />
    </>
  );
}
