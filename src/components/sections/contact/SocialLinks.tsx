import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

export function SocialLinks() {
  const links = [
    { icon: <FiGithub size={22} />, href: "https://github.com/aballal-source" },
    { icon: <FiLinkedin size={22} />, href: "https://linkedin.com/in/aballal" },
    { icon: <RiTwitterXLine size={22} />, href: "https://x.com/9ballal" },
    { icon: <FiInstagram size={22} />, href: "https://instagram.com/ahmed_ballal" }
  ];

  return (
    <div className="flex justify-center gap-6 p-4">
      {links.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-primary transition-colors duration-300"
          whileHover={{ y: -2 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
} 