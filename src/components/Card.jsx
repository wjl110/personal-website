import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, subtitle, date, children, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-xl hover:bg-surface/70 transition-colors border border-white/5 hover:border-primary/20 mb-6"
  >
    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
      <div>
        <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        {subtitle && <p className="text-primary font-medium">{subtitle}</p>}
      </div>
      {date && <span className="text-sm text-slate-400 font-mono bg-white/5 px-2 py-1 rounded">{date}</span>}
    </div>
    <div className="text-slate-300 leading-relaxed text-sm space-y-2">
      {children}
    </div>
  </motion.div>
);

export default Card;
