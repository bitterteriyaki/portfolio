import { motion, useScroll } from 'framer-motion';

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const classes = [
    'h-0.5',
    'bg-white',
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'origin-top-left',
  ];

  return (
    <motion.div
      className={classes.join(' ')}
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollIndicator;
