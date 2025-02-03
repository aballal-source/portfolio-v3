import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/constants/data';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <section id="projects" className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured{' '}
              <span className="bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-zinc-400">
              A collection of projects that showcase my expertise
            </p>
          </div>

          {/* Projects Display */}
          <div className="relative px-12">
            {/* Navigation Arrows */}
            <div className="hidden lg:block">
              <button
                onClick={prevPage}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1221]/50 text-[#00D2BE] hover:bg-[#00D2BE]/10 transition-colors"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextPage}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0B1221]/50 text-[#00D2BE] hover:bg-[#00D2BE]/10 transition-colors"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Projects Grid */}
            <motion.div className="w-full">
              {/* Desktop View - Paginated */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                {currentProjects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>

              {/* Mobile/Tablet View */}
              <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="hidden lg:flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'w-8 bg-[#00D2BE]' 
                      : 'bg-[#00D2BE]/20 hover:bg-[#00D2BE]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 