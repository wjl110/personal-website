import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`py-20 px-6 max-w-5xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default Section;
