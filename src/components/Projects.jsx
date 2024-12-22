import React from 'react';
import TodoImage from "../assets/ToDoList-react.png"
import WeatherImage from "../assets/Weather-app.png"
import PasswordGenImage from "../assets/Password-gen.png"

const projects = [
  {
    title: 'ToDo List App',
    description: 'A ToDo List app with ReactJs',
    image: TodoImage,
    link: 'https://todolistapp-react.vercel.app/'
  },
  {
    title: 'A Weather app',
    description: 'A weather app based on your location and search options is also availables',
    image: WeatherImage,
    link: 'https://weather-app-haris.vercel.app/'
  },
  {
    title: 'Password Generator',
    description: 'A password generator app where you can generate password',
    image: PasswordGenImage,
    link: 'https://password-generator-weld-nine.vercel.app/'
  }
];

function ProjectCard({ project, index }) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video w-full">
        <img
          src={project.image}
          alt={project.title}
          
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-200 opacity-0 transform transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          {project.description}
        </p>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;