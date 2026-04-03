import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Core Backend",
    skills: ["C#", ".NET 8", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "SQL Server"]
  },
  {
    title: "Architecture & Patterns",
    skills: ["Clean Architecture", "Domain-Driven Design (DDD)", "CQRS", "MediatR", "REST APIs", "SOLID"]
  },
  {
    title: "Testing & Reliability",
    skills: ["Unit Testing", "xUnit", "Moq", "FluentAssertions", "TimeAbstractions"]
  },
  {
    title: "Frontend & Tooling",
    skills: ["TypeScript", "React", "Astro", "Tailwind CSS", "Docker", "GitHub Actions"]
  }
];

export default function TechnicalSkills() {
  return (
    <motion.section 
      className="py-12 border-t border-card/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-light mb-10">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-card/40 border border-card p-6 rounded-xl hover:bg-card/60 transition-colors"
          >
            <h3 className="text-xl font-semibold text-light mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="text-sm font-medium px-3 py-1.5 bg-dark text-muted rounded-md border border-card/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
