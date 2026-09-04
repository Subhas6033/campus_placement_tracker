import { motion } from "framer-motion";

// Common Transitions
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 18,
};

export const smoothTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

// Pages
export const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      staggerChildren: 0.08,
    },
  },
};

// Fade + Slide up
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

// Fade + Slide left
export const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// Fade + Slide right
export const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// Scale entrance
export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// Stagger Container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Card Hover
export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -5,
    scale: 1.01,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Icon Hover
export const iconHover = {
  rest: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 4,
    scale: 1.08,
    transition: springTransition,
  },
};

// Buttons
export const buttonMotion = {
  whileHover: {
    y: -2,
  },
  whileTap: {
    scale: 0.97,
  },
  transition: {
    duration: 0.15,
  },
};

// Number / Stats Animations
export const statVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Floating Decorative animations
export const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Line reveal
export const lineRevealVariants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left",
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Blur reveal
export const blurRevealVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
