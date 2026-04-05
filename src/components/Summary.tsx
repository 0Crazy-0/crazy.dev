import { motion } from 'motion/react';

export default function Summary() {
  return (
    <motion.section 
      className="py-12 border-t border-card/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-light mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Professional Summary
      </motion.h2>
      <motion.p className="text-lg text-muted leading-relaxed max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Performance-driven Backend Developer specializing in the <strong>.NET</strong> ecosystem. 
        Focused on translating complex business rules into scalable, maintainable, and reliable software. 
        Passionate about delivering high-quality solutions by evaluating architectural trade-offs, ensuring strong system design, and building resilient backends through well-crafted code that solves practical problems.
      </motion.p>
    </motion.section>
  );
}
