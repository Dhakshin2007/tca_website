import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  idName: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, idName }) => {
  return (
    <motion.section
      id={idName}
      variants={{
        hidden: { y: 50, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.25,
            delay: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 sm:py-24 container mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
