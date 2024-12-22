import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              HARIS
            </h2>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <SocialIcon href="https://github.com/harisshafi10" Icon={Github} />
            <SocialIcon href="https://www.linkedin.com/in/harisshafi01" Icon={Linkedin} />
            <SocialIcon href="https://twitter.com/harisshafi3" Icon={Twitter} />
            <SocialIcon href="mailto:harisshafi@gmail.com" Icon={Mail} />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>© {currentYear} Haris Shafi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;