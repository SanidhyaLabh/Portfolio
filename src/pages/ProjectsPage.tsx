import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "LexiRead",
      description: "A web application aimed at promoting inclusive and accessible reading experiences for Dyslexic patients. Designed the user-friendly front end using HTML, CSS, and Figma for intuitive and responsive interface design.",
      image: "https://i.postimg.cc/Cx8wcv0H/1212-2.jpg",
      tags: ["HTML", "CSS", "Figma", "Accessibility", "UX Design"],
      githubLink: "https://github.com/SanidhyaLabh/lexiread.git",

    },
      {
      title: "OptiNeuro",
      description: "built a comprehensive cognitive performance platform that combines AI agents, neural pattern analysis, and real-time optimization to enhance productivity and well-being.",
      image: "https://i.postimg.cc/Nj4602Q7/Screenshot-2025-06-27-111111.png",
      tags: ["AI","MachineLearning", "Productivity" ,"CognitiveScience", "NeuralNetwork"],
      liveLink: "https://optineuro.netlify.app/"
    },
     {
      title: "ArthAI",
      description: "ArthAI is a hyper-localized financial copilot that provides AI-powered money advice in Hindi, Tamil, Marathi & more. It helps with budgeting, taxes, loans, investments, and credit scores—tailored for Indian users.",
      image: "https://i.postimg.cc/bwcP8CJ2/Screenshot-2025-06-26-162946.png",
      tags: ["Fintech","AI ChatBot","FinancialLiteracy"],
      liveLink: "https://rococo-lily-f33e19.netlify.app/"
    },
    {
      title: "AR Video Game - The Last Call",
      description: "Created a 3D character model using Blender and designed the user interface for a game application, ensuring a cohesive visual experience and intuitive user interaction.",
      image: "https://i.postimg.cc/g0x1Z3nP/Untitled-design.png",
      tags: ["Blender", "3D Design", "UI/UX", "Game Dev", "AR"],

    },
    {
      title: "AI-Powered Exoskeleton",
      description: "Designing an exoskeleton system aimed at assisting rehabilitation and physiotherapy using a combination of AI and basic robotics. Currently in progress.",
      image: "https://i.postimg.cc/15kQVpFg/Screenshot-2025-05-31-123214.png",
      tags: ["Robotics", "AI", "Healthcare", "Python", "In Progress"],
    
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-heading text-electric-blue mb-6">Spaceship Control Panels</h1>
          <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Explore my collection of projects from the digital frontier. Each project represents a unique challenge and solution crafted with passion and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
