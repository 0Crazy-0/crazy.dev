import { motion } from 'motion/react';

export default function Summary() {
  return (
    <motion.section 
      className="py-12 border-t border-card/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-light mb-6">Professional Summary</h2>
      <p className="text-lg text-muted leading-relaxed max-w-4xl">
        Performance-driven Backend Developer specializing in the <strong>.NET</strong> ecosystem. 
        Focused on translating complex business rules into scalable, maintainable, and reliable software. 
        Passionate about delivering high-quality solutions by evaluating architectural trade-offs, ensuring strong system design, and building resilient backends through well-crafted code that solves practical problems.
      </p>
    </motion.section>
  );
}
