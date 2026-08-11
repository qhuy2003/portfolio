import React from 'react';
import { motion } from 'framer-motion';

// Animation Variant 1: Fade + Slide Up
const fadeSlideVariants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: 'easeInOut'
    }
  }
};

// Animation Variant 2: Scale + Fade Zoom
const scaleFadeVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(4px)'
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: 'blur(4px)',
    transition: {
      duration: 0.25,
      ease: 'easeIn'
    }
  }
};

const PageWrapper = ({ children, transitionType = 'fadeSlide' }) => {
  const selectedVariants = transitionType === 'scaleFade' ? scaleFadeVariants : fadeSlideVariants;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariants}
      style={{ width: '100%', minHeight: '80vh' }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
