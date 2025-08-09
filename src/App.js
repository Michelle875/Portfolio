// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PersonalInfo from './components/sections/PersonalInfo';
import AcademicHistory from './components/sections/AcademicHistory';
import SideProjects from './components/sections/SideProjects';
import Research from './components/sections/Research';
import OtherInterests from './components/sections/OtherInterests';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('personal');

  const renderTab = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfo />;
      case 'academic':
        return <AcademicHistory />;
      case 'projects':
        return <SideProjects />;
      case 'research':
        return <Research />;
      case 'interests':
        return <OtherInterests />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content">
        {renderTab()}
      </main>
    </div>
  );
}

export default App;