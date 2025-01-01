import React from "react";
import ProjectCarousel from "../../components/projectsCarousel/ProjectCarousel";
import styles from "./ProjectPage.module.css";

const ProjectPage: React.FC = () => {
  return (
    <div className={styles.projectPage}>
      <h2 className={styles.pageTitle}>My Projects</h2>
      <ProjectCarousel />
    </div>
  );
};

export default ProjectPage;
