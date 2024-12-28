import React from "react";
import SkillStick from "../../components/skillSticks/SkillStick";
import styles from "./SkillsPage.module.css";

const SkillsPage: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      {/* Левые стики */}
      <div className={styles.leftContainerTop}>
        <SkillStick
          title="Front-End Development"
          items={[
            "HTML5 & CSS3: Crafting responsive layouts.",
            "JavaScript (ES6+): Developing interactive web applications.",
            "React: Building scalable user interfaces.",
            "Redux: State management for complex apps.",
            "Vite: Fast build tools for React.",
            "Bootstrap: Responsive design with pre-built components.",
            "Material-UI: Sleek interfaces with customizable components.",
          ]}
          direction="left"
        />
      </div>
      {/* Правый стик */}
      <div className={styles.rightContainer}>
        <SkillStick
          title="Back-End Development"
          items={[
            "Node.js: Scalable server-side applications.",
            "Express.js: Fast APIs for backend functionality.",
            "MongoDB: Storing, querying, and managing data.",
          ]}
          direction="right"
        />
      </div>
      <div className={styles.leftContainerDown}>
        <SkillStick
          title="Design Tools"
          items={[
            "Figma: Prototypes and user-centric designs.",
            "Adobe Photoshop: Photo editing and visual enhancements.",
            "Adobe Illustrator: Creating icons and illustrations.",
            "Other Expertise: REST APIs, version control, etc.",
          ]}
          direction="left"
        />
        </div>
    </div>
  );
};

export default SkillsPage;
