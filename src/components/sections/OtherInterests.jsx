// components/sections/OtherInterests.jsx
import React from 'react';

const OtherInterests = () => {
  return (
    <section className="section">
      <h2>Other Interests</h2>
      
      <div className="interests-grid">
        
        <div className="interest-card">
          <h3>Science Communication</h3>
          <p>
            I'm passionate about making complex scientific concepts accessible to broader audiences. 
            The purpose of research and technology is to learn and spread information.
          </p>
        </div>
        
        <div className="interest-card">
          <h3>Outdoor Activities</h3>
          <p>
            When not working, I enjoy hiking, reading, and landscape photography. These activities 
            provide balance and often inspire new research ideas about patterns in nature.
          </p>
        </div>

        <div className="interest-card">
          <h3>Language Learning</h3>
          <p>
            I enjoy learning new languages and exploring different cultures through language. 
          </p>
        </div>

        <div className="interest-card">
          <h3>Drawing</h3>
          <p>
            In my free time, I sketch landscapes. Drawing helps me think outside 
            the box and improves my ability to convey complex ideas clearly and engagingly.
          </p>
        </div>
        
        <div className="interest-card">
          <h3>Creative Writing</h3>
          <p>
            Writing short stories allows me to explore imagination and sharpen my communication skills.
          </p>
        </div>

        <div className="interest-card">
          <h3>Travel and Culture</h3>
          <p>
            I like to travel and experience different cultures. Places have a unique history and environment that I love to explore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherInterests;
