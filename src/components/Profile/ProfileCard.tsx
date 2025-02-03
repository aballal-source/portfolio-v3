'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileImage from '@/components/profile/ProfileImage.jpg';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

interface ProfileCardProps {
  isScrolled: boolean;
}

function ProfileImage() {
  return (
    <div className="relative h-[300px] overflow-hidden flex flex-col justify-start">
      <Image
      priority={true}
        src={profileImage}
        alt="Ahmed Ballal"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300 opacity-90 filter brightness-75 contrast-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-darkLight via-darkLight/95 to-transparent z-10" />
    </div>
  );
}

function ProfileCardHeader() {
  return (
    <div className="p-5 bg-darkLight/90">
      <h1 className="text-3xl font-bold text-primary mb-2 drop-shadow-lg">
        Ahmed Ballal
      </h1>
      <p className="text-lg text-text-primary font-medium drop-shadow-md">
        Software Engineer
      </p>
    </div>
  );
}

function SocialLinks() {
  const links = [
    { icon: <FiGithub size={22} />, href: "https://github.com/aballal-source" },
    { icon: <FiLinkedin size={22} />, href: "https://linkedin.com/in/aballal" },
    { icon: <RiTwitterXLine size={22} />, href: "https://x.com/9ballal" },
    { icon: <FiInstagram size={22} />, href: "https://instagram.com/ahmed_ballal" }
  ];

  return (
    <div className="flex justify-center gap-6 p-4 border-t border-primary/10">
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

export function ProfileCard({ isScrolled }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ 
        opacity: isScrolled ? 0 : 1,
        x: isScrolled ? -100 : 0,
        scale: isScrolled ? 0.95 : 1,
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-8 top-24 z-50 w-[380px] xl:w-[420px] hidden lg:block"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primaryLight/20 rounded-lg blur-xl transition-all duration-300 group-hover:blur-2xl" />
        
        <div className="relative bg-darkLight/90 border border-primary/20 rounded-lg backdrop-blur-xl shadow-2xl overflow-hidden">
          <ProfileCardHeader />
          <ProfileImage />
          <SocialLinks />
        </div>
      </div>
    </motion.div>
  );
} 