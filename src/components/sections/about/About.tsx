'use client'
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
// import { TechStackCarousel } from './TechStackCarousel';
// import { TypingEffect } from './TypingEffect'

// src/components/Sections/About/About.tsx
const TypingEffect = dynamic(() => import('./TypingEffect').then(mod => mod.TypingEffect), {
  ssr: false,
  loading: () => <span>Full Stack Developer</span>
});

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
                  <span className="text-white font-semibold relative">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
//***************************************************************************************** */
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
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }