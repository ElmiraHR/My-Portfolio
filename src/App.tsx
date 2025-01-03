import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/homePage/HomePage';
import SkillsPage from './pages/skilsPage/SkillsPage';
import ProjectPage from './pages/projectsPage/ProjectPage';
import './App.css';
import ContactForm from './components/contactsForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <SkillsPage />
      </div>
      <div className="section">
        <ProjectPage />
      </div>
      <div className="section">
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
