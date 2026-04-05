import { motion } from 'motion/react';
import {
  SiDotnet, SiPostgresql,
  SiTypescript, SiReact, SiAstro, SiTailwindcss, SiDocker, SiGithubactions
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { FiServer, FiLayers, FiCheckCircle, FiTool } from 'react-icons/fi';
import {
  FaServer, FaCubes, FaCodeBranch, FaSitemap, FaCheckDouble,
  FaVial, FaCode, FaExchangeAlt, FaClock, FaDatabase, FaLayerGroup
} from 'react-icons/fa';

const skillCategories = [
  {
    title: "Core Backend",
    icon: FiServer,
    skills: [
      { name: "C#", icon: TbBrandCSharp },
      { name: ".NET 10", icon: SiDotnet },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Entity Framework Core", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: DiMsqlServer }
    ]
  },
  {
    title: "Architecture & Patterns",
    icon: FiLayers,
    skills: [
      { name: "Clean Architecture", icon: FaCubes },
      { name: "N-Tier Architecture", icon: FaLayerGroup },
      { name: "Domain-Driven Design", icon: FaSitemap },
      { name: "CQRS", icon: FaExchangeAlt },
      { name: "MediatR", icon: FaCodeBranch },
      { name: "REST APIs", icon: FaServer },
      { name: "SOLID", icon: FaCode }
    ]
  },
  {
    title: "Testing & Reliability",
    icon: FiCheckCircle,
    skills: [
      { name: "Unit Testing", icon: FaVial },
      { name: "xUnit", icon: FaCheckDouble },
      { name: "Moq", icon: FaCode },
      { name: "FluentAssertions", icon: FaCheckDouble },
      { name: "TimeAbstractions", icon: FaClock }
    ]
  },
  {
    title: "Frontend & Tooling",
    icon: FiTool,
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Astro", icon: SiAstro },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions }
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 }
  }
};

export default function TechnicalSkills() {
  return (
    <motion.section
      className="py-16 border-t border-card/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-light mb-2">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group h-full p-6 sm:p-8 rounded-2xl bg-card/10 border border-card/20 hover:bg-card/15 hover:border-accent/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-card/20 text-accent group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-light/90">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.span
                      key={skill.name}
                      variants={skillVariants}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium rounded-full bg-card/10 text-muted/90 border border-card/30 hover:bg-card/40 hover:text-light transition-colors duration-300 cursor-default"
                    >
                      {SkillIcon && <SkillIcon className="w-4 h-4" />}
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}