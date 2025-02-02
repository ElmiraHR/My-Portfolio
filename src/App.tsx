import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/homePage/HomePage";
import SkillsPage from "./pages/skilsPage/SkillsPage";
import ExperiencePage from "./pages/experiencePage/ExperiencePage";
import ProjectPage from "./pages/projectsPage/ProjectPage";
import ContactForm from "./components/contactsForm/ContactForm";
import ScrollCircle from "./components/sсrollCircle/ScrollCircle";
import Footer from "./components/footer/Footer";  // Добавлен импорт футера
import "./App.css";

function App() {
  const sections = ["home", "skills", "experience", "projects", "contacts"];
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (direction: "next" | "prev") => {
    const nextSectionIndex =
      direction === "next"
        ? Math.min(currentSection + 1, sections.length - 1)
        : Math.max(currentSection - 1, 0);

    const targetElement = document.getElementById(sections[nextSectionIndex]);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(nextSectionIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const newSectionIndex = sections.findIndex((id) => {
        const sectionElement = document.getElementById(id);
        if (!sectionElement) return false;

        const rect = sectionElement.getBoundingClientRect();
        return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      });

      if (newSectionIndex !== -1) {
        setCurrentSection(newSectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="App">
      <Navigation />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="skills" className="section">
        <SkillsPage />
      </div>
      <div id="experience" className="section">
        <ExperiencePage />
      </div>
      <div id="projects" className="section">
        <ProjectPage />
      </div>
      <div id="contacts" className="section">
        <ContactForm />
      </div>
      <ScrollCircle
        direction="up"
        visible={currentSection > 0}
        onClick={() => scrollToSection("prev")}
        position="left"
      />
      <ScrollCircle
        direction="down"
        visible={currentSection < sections.length - 1}
        onClick={() => scrollToSection("next")}
        position="right"
      />
      <Footer /> {/* Добавлен футер */}
    </div>
  );
}

export default App;
