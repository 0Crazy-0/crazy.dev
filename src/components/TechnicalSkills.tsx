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
      staggerChildren: 0.12
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25 }
  }
};

export default function TechnicalSkills() {
  return (
    <motion.section
      className="py-12 border-t border-card/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-bold text-light mb-10">Technical Skills</h2>

      <div className="space-y-0 divide-y divide-card/30">
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group py-7 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Category label */}
                <div className="flex items-center gap-2.5 sm:w-52 shrink-0">
                  <CategoryIcon className="w-4 h-4 text-muted/60 group-hover:text-muted transition-colors duration-300" />
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-widest">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        variants={skillVariants}
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-sm rounded-lg bg-card/10 text-light/80 hover:bg-card/25 hover:text-light transition-colors duration-300 cursor-default"
                      >
                        {SkillIcon && <SkillIcon className="w-4 h-4 text-muted/60" />}
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}