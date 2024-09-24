'use client';

import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={fadeInVariants}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}
