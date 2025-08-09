// components/Navigation.jsx
import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button 
            className={activeTab === 'personal' ? 'active' : ''}
            onClick={() => setActiveTab('personal')}
          >
            Personal Information
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'academic' ? 'active' : ''}
            onClick={() => setActiveTab('academic')}
          >
            Academic History
          </button>
        </li>
       
        <li>
          <button 
            className={activeTab === 'research' ? 'active' : ''}
            onClick={() => setActiveTab('research')}
          >
            Research
          </button>
        </li>

         <li>
          <button 
            className={activeTab === 'projects' ? 'active' : ''}
            onClick={() => setActiveTab('projects')}
          >
            Side Projects
          </button>
        </li>
        
        <li>
          <button 
            className={activeTab === 'interests' ? 'active' : ''}
            onClick={() => setActiveTab('interests')}
          >
            Other Interests
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;