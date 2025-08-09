// components/sections/Research.jsx
import React from 'react';

const Research = () => {
  const researchAreas = [
    {
      title: "Gaze Patterns in Social Wayfinding Tasks",
      description: "We ask whether differences in where people look while navigating social environments relate to their overall navigation strategy. In this virtual reality experiment, participants walked through a simulated train station while their eye movements were recorded. Using clustering and deep learning models, I identified subgroups with distinct scanning patterns, speeds, and tendencies to focus on social versus object-based features. These profiles help reveal how people allocate attention and plan routes in complex, dynamic spaces.",
      publications: ["In preparation"]
    },
    {
      title: "Human Navigation in Virtual Reality",
      description: "This project examines how people make navigation decisions in a busy, dynamic VR train station, particularly when moving around other pedestrians. Participants’ movement paths, decision points, and gaze patterns were analyzed to understand the role of social and environmental cues. Our results revealed distinct strategies—some participants prioritized efficient paths, while others adapted to avoid social collisions—suggesting cognitive differences in spatial planning and attention. My contributions included designing the analysis pipeline and implementing movement and gaze data modeling.",
      publications: [
        "Suchojad, Jakub, Sohn, Samuel, Shlivko, Michelle, Stromswold, Karin, & Feldman, Jacob. (2025). Exploring Human Navigational Strategies in a Dynamic VR Social Wayfinding Task. Journal of Vision, 25, 1886. https://doi.org/10.1167/jov.25.9.1886",
        "Suchojad, Jakub, Sohn, Samuel, Shlivko, Michelle, Feldman, Jacob, & Stromswold, Karin. (2025). Social Wayfinding in VR: Navigational Decisions and Eye Movements in a Dynamic Environment. https://doi.org/10.31234/osf.io/8s927_v1"
      ]
    },
    {
      title: "Early Gaze Patterns Predict How People Navigate Around Other People: A VR Study",
      description: "We investigated whether eye movements before walking could predict a person’s navigation path in a social environment. In this VR study, college students navigated a crowded train station while their gaze was tracked from the moment the scene appeared. Analysis revealed that early fixation patterns—measured before the first step—were strong predictors of whether participants would take direct routes or adjust their path around others. My role included conducting the statistical analyses and presenting the findings at the Eastern Psychological Association Conference.",
      publications: [
        "Shlivko, M., Sohn, S., Suchojad, J., Feldman, J., & Stromswold, K. (2025, March). Gaze patterns predict how people navigate around other people: A VR study [Poster presentation]. Eastern Psychological Association 2025 Conference, Philadelphia, PA, United States."
      ]
    }
  ];

  return (
    <section className="section">
      <h2>Research</h2>
      <p className="section-intro">
        My research focuses on how people perceive, plan, and act in complex environments—particularly in social navigation contexts—using tools from computer science, cognitive science, and statistics. Below are my main research projects with selected publications.
      </p>
      
      <div className="research-areas">
        {researchAreas.map((area, index) => (
          <div key={index} className="research-area">
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <h4>Selected Publications:</h4>
            <ul>
              {area.publications.map((pub, i) => (
                <li key={i}>{pub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
