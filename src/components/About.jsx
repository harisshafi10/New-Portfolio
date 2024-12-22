import React from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

function SkillCard({ Icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all">
      <Icon className="w-12 h-12 mb-4 text-purple-600" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function About() {
  const skills = [
    {
      Icon: Code2,
      title: "Development",
      description: "Experienced in building modern web applications using React, JavaScript, and Node.js"
    },
    {
      Icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces with attention to detail"
    },
    {
      Icon: Rocket,
      title: "Innovation",
      description: "Always learning and implementing the latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;