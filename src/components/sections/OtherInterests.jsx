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
            I regularly contribute articles to popular science magazines and give public lectures 
            on emerging technologies and their societal implications.
          </p>
        </div>
        
        <div className="interest-card">
          <h3>Mentoring</h3>
          <p>
            Beyond formal academic supervision, I mentor high school and undergraduate students 
            through various programs aimed at increasing diversity in STEM fields. I've helped 
            establish several pipeline programs at local schools.
          </p>
        </div>
        
        <div className="interest-card">
          <h3>Open Science</h3>
          <p>
            Advocate for open access publishing and reproducible research. All my code and data 
            are publicly available when possible, and I've developed several tools to make research 
            workflows more transparent.
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
            I enjoy learning new languages and exploring different cultures through language. This passion 
            enhances my understanding of communication and cognition, which informs my research.
          </p>
        </div>

        <div className="interest-card">
          <h3>Drawing</h3>
          <p>
            In my free time, I write sketch landscapes. Drawing helps me think outside 
            the box and improves my ability to convey complex ideas clearly and engagingly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OtherInterests;
