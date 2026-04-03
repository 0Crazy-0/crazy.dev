import { motion } from 'motion/react';

export default function Hero() {
  return (
    <motion.section 
      className="flex flex-col gap-4 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="space-y-4">
        <motion.h2 
            className="text-muted text-xl font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            Hi, I'm
        </motion.h2>
        <motion.h1 
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-light"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
        >
            Crazy.
        </motion.h1>
        <motion.h3 
            className="text-2xl sm:text-4xl font-semibold text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            Backend Web Developer
        </motion.h3>
      </div>
      
      <motion.div 
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <a 
          href="https://github.com/0CrazyLove" 
          target="_blank" 
          className="px-6 py-3 bg-light text-dark font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          View GitHub
        </a>
        <a 
          href="mailto:0crazy.dev@gmail.com" 
          className="px-6 py-3 border border-muted text-light font-semibold rounded-lg hover:bg-card hover:border-light transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
