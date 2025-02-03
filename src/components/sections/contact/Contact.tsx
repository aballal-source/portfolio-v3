import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Social Links & Info */}
            <div className="md:col-span-2 space-y-8">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 