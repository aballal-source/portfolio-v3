import { motion } from 'framer-motion';
// import { TechStackCarousel } from './TechStackCarousel';
import { TypingEffect } from './TypingEffect'

export function About() {
  return (
    // <section id="about" className="min-h-screen relative flex flex-col justify-center py-24">
      <section className="min-h-screen relative flex flex-col justify-center py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Introduction */}
          <div className="space-y-4 py-6 text-left lg:ml-[150px]">
            <h2 className="text-4xl md:text-5xl font-bold">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent">
                Ahmed Ballal
              </span>
            </h2>
            
            {/* Animated Description */}
  <div className="text-lg md:text-xl text-zinc-400 space-y-4">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    <div>
      I&apos;m a(n){' '}
      <span className="text-white font-semibold relative">
        <TypingEffect/>
        <motion.span
          className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00D2BE]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </span>{' '}
      with a passion for building{' '}
      <span className="text-[#00D2BE] font-medium">innovative</span> web applications.
    </div>
  </motion.div>

  <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
    className="leading-relaxed"
  >
    I specialize in crafting{' '}
    <span className="relative inline-block group">
      <span className="absolute -inset-1 bg-gradient-to-r from-[#00D2BE]/20 to-[#27F4D2]/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"/>
      <span className="relative text-white">seamless experiences</span>
    </span>
    {' '}using modern technologies and best practices.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 }}
  >
    Currently focused on{' '}
    <span className="font-mono text-[#27F4D2] bg-[#0B1221] px-2 py-1 rounded">
      React
    </span>
    {' '}and{' '}
    <span className="font-mono text-[#27F4D2] bg-[#0B1221] px-2 py-1 rounded">
      TypeScript
    </span>
    {' '}development. In my free time, I enjoy{' '}
    <span className="text-[#00D2BE] font-medium">video games</span> 
    {', '}
    <span className="text-[#00D2BE] font-medium">playing sports</span> 
    {', '}
    <span className="text-[#00D2BE] font-medium">traveling</span> 
    {' '}
    and exploring new technologies.
  </motion.p>
</div>


          {/* Tech Stack Section
          <div className="pt-12">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl lg:ml-[150px] font-semibold mb-8 text-white"
            >
              Technologies I Work With
            </motion.h3> */}
            {/* <TechStackCarousel /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}