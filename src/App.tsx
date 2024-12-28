import React, { useEffect, useRef } from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './pages/homePage/HomePage';
import SkillsPage from './pages/skilsPage/SkillsPage';
import './App.css';

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // Срабатывает, если видно 10% секции
    );

    const sections = [homeRef.current, skillsRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div ref={homeRef} className="section hidden">
        <Home />
      </div>
      <div ref={skillsRef} className="section hidden">
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
