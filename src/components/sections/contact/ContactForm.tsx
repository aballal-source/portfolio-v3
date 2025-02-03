import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '@/hooks/useContactForm';

export function ContactForm() {
  const {
    formData,
    formErrors,
    formStatus,
    handleSubmit,
    handleInputChange
  } = useContactForm();

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Name Input */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-zinc-400">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border 
            ${formErrors.name ? 'border-red-500' : 'border-[#00D2BE]/20'}
            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]
            transition-colors duration-200`}
          placeholder="Your name"
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {formErrors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm"
            >
              {formErrors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-zinc-400">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border 
            ${formErrors.email ? 'border-red-500' : 'border-[#00D2BE]/20'}
            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]
            transition-colors duration-200`}
          placeholder="Your email"
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {formErrors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm"
            >
              {formErrors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-zinc-400">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg bg-[#0B1221]/50 border 
            ${formErrors.message ? 'border-red-500' : 'border-[#00D2BE]/20'}
            text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00D2BE]
            transition-colors duration-200 resize-none`}
          placeholder="Your message"
          whileFocus={{ scale: 1.01 }}
        />
        <AnimatePresence>
          {formErrors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-sm"
            >
              {formErrors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={formStatus === 'loading'}
        className={`w-full py-3 rounded-lg font-medium transition-all duration-200
          ${formStatus === 'loading' 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-[#00D2BE] to-[#27F4D2] text-black hover:shadow-lg hover:shadow-[#00D2BE]/20'
          }`}
        whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: formStatus === 'loading' ? 1 : 0.98 }}
      >
        {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Form Status Messages */}
      <AnimatePresence mode="wait">
        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-green-400 mt-4"
          >
            Message sent successfully!
          </motion.div>
        )}
        {formStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-red-400 mt-4"
          >
            Failed to send message. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}