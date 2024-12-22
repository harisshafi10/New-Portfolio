import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      <div className="container mx-auto px-6 relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-down">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse-glow">Haris Shafi</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center gap-6 animate-fade-in-up">
          <SocialLink href="https://github.com/harisshafi10" Icon={Github} />
          <SocialLink href="https://www.linkedin.com/in/harisshafi01" Icon={Linkedin} />
          <SocialLink href="https://twitter.com/harisshafi3" Icon={Twitter} />
          <SocialLink href="mailto:harisshafi01@gmail.com" Icon={Mail} />
        </div>
      </div>
    </section>
  );
}

// Extracted reusable social link component
function SocialLink({ href, Icon }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover-lift hover-glow"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

export default Hero;