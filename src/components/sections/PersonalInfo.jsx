// components/sections/PersonalInfo.jsx
import React from 'react';
import photo from '../../photo.jpeg';

const PersonalInfo = () => {
  return (
    <section className="section">
      <h2>Personal Information</h2>
      <div className="personal-grid">
        <div className="personal-photo">
          {/* Placeholder for photo - replace with your actual photo */
          <img src={photo} alt="Michelle Shlivko" className="photo" />

          }
          <div className="photo-placeholder"></div>
        </div>
        <div className="personal-details">
          <h3>Michelle Shlivko</h3>
          <p><strong>Position:</strong> Machine Learning Research Intern</p>
          <p><strong>University:</strong> Rutgers University</p>
          <p><strong>Majors:</strong> Computer Science and Cognitive Science</p>
          <p><strong>Graduation Year:</strong> 2026</p>
          <p><strong>Email:</strong> michelleshlivko@gmail.com</p>
          <p><strong>Phone:</strong> (732) 939-2999</p>
          <p><strong>Location:</strong> New Jersey</p>
          
          <h4>Professional Summary</h4>
          <p>
            
            Computer Science and Cognitive Science 
            student at Rutgers University with a strong foundation
             in artificial intelligence, data science, and 
             human-centered computing. Experienced in developing 
             and evaluating machine learning models across research and 
             practical applications, including neural networks, ElasticNet
              regression, and gaze-based decision modeling in 
              immersive VR environments. Passionate about building tools 
              at the intersection of cognition and technology to improve 
              decision-making, accessibility, and well-being.
            Proven ability to independently execute technical projects, 
            analyze complex data, and present insights to academic
             and applied audiences. Skilled in Python, PyTorch, React, 
             and scientific analysis, with a track record of academic 
             research, public presentations, and creative technology design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;