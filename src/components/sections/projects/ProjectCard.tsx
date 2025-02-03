import { motion } from 'framer-motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group relative bg-darkLight rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/80 z-10" />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primaryLight transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          View Project
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </motion.a>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primaryLight/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  );
} 