import { motion } from 'motion/react';

export default function Education() {
  return (
    <motion.section 
      className="py-12 border-t border-card/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-light mb-10">Education</h2>
      
      <div className="bg-card/30 border border-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-light">Technical Degree in Software Development</h3>
          <h4 className="text-lg text-muted mt-1">SENA (Servicio Nacional de Aprendizaje), Colombia</h4>
        </div>
        <div className="bg-dark/50 px-4 py-2 rounded-lg border border-card">
          <span className="text-sm font-semibold text-light">Languages</span>
          <p className="text-sm text-muted mt-1">Spanish (Native) • English (C1 Written)</p>
        </div>
      </div>
    </motion.section>
  );
}
