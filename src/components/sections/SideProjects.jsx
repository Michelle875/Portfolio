// components/sections/SideProjects.jsx
import React from 'react';

const SideProjects = () => {
  const projects = [
    {
      title: "Financial Time Series Prediction with LSTM",
      description: "Developed a Long Short-Term Memory (LSTM) neural network model to predict stock price movements using historical financial data, demonstrating deep learning’s power in modeling complex temporal dependencies.",
      technologies: ["Python", "TensorFlow", "Keras", "Time Series Analysis"],
      link: "#" // Replace with link if available
    },
    {
      title: "Speaker Identification Neural Network",
      description: "Built a neural network classifier using PyTorch to identify speakers from audio utterances, incorporating cross-validation, label smoothing, and top-k accuracy tracking for improved performance.",
      technologies: ["Python", "PyTorch", "Machine Learning"],
      link: "#" // Replace with link if available
    },
    {
      title: "Adaptive Goal Planner & Motivational Coach",
      description: "A smart organizational tool that lets users set goals and timelines while personalizing daily action plans based on mood and personality. Includes interactive flowchart visualizations of goals and tasks, with AI-powered motivational check-ins and progress tracking.",
      technologies: ["React", "Node.js", "OpenAI GPT API", "React Flow", "Firebase"],
      link: "#" // Replace with link if available
    },
    {
      title: "Dynamic Lyric Translation and Visualization Site",
      description: "A web app concept where users input a song, artist, and language to get a video playing the song with synchronized original and translated lyrics. Combines NLP translation APIs, timed lyric alignment, and interactive multimedia display.",
      technologies: ["React", "Node.js", "NLP APIs", "Web Audio API"],
      link: "#" // Replace with link if available
    },
    {
      title: "China–Canada Tax and Trade Analysis",
      description: "Data analysis project modeling the impact of agricultural tariffs and taxation policies between China and Canada on commodity pricing and supply chains, aimed at helping farmers and consumers understand economic shifts.",
      technologies: ["Python", "Pandas", "Data Visualization", "Economic Modeling"],
      link: "#" // Replace with link if available
    },
    {
      title: "Alzheimer’s Support App",
      description: "An app prototype designed to store and manage medical information, family data, daily goals, and progress for people with Alzheimer’s, inspired by my grandmother’s experience.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      link: "#" // Replace with link if available
    },
    {
      title: "Meal Recommender Website",
      description: "A web app that recommends meals based on user inputs, featuring image upload functionality and dynamic content management using React.",
      technologies: ["React", "JavaScript", "REST APIs"],
      link: "#" // Replace with link if available
    },
    
  ];

  return (
    <section className="section">
      <h2>Side Projects</h2>
      <p className="section-intro">
        Beyond my academic research, I enjoy exploring applied AI, data science, and multimedia projects that intersect technology and real-world problems. Here are some of my recent initiatives:
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
