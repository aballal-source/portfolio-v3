'use client';
import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import { TechStackCarousel } from './TechStackCarousel';

export function About() {
  return (
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
            
            <div className="text-lg md:text-xl text-zinc-400 space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div suppressHydrationWarning>
                  I&apos;m a(n){' '}
                  <span className="text-lime-300 font-semibold relative">
                    <TypingEffect />
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00D2BE]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                </div>
              </motion.div>
              <p>
                I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field. With a strong foundation in full-stack development, I have experience in various technologies and frameworks.
              </p>
              <p>
                My journey in tech has been driven by a love for problem-solving and a desire to build cool projects. I am always eager to take on new challenges and collaborate with others to create impactful software.
              </p>
            </div>
          </div>
          {/* Tech Stack Section*/}
          <div className="pt-12">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl lg:ml-[150px] font-semibold mb-8 text-red-600"
            >
              Technologies I work with:
            </motion.h3>
            <TechStackCarousel />
            </div>

        </motion.div>
      </div>
    </section>
  );
}