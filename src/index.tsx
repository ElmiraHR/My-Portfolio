import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function activateSectionsOnScroll() {
  const sections = document.querySelectorAll(".section");
  const threshold = 0.15;

  const handleScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0;

      if (isVisible) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}

function MainApp() {
  useEffect(() => {
    activateSectionsOnScroll();
  }, []);

  return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
