import React, { useEffect, useState, useRef } from "react";
import SkillStick from "../../components/skillSticks/SkillStick";
import styles from "./SkillsPage.module.css";
import CustomButton from "../../components/buttons/CustomButton";

const SkillsPage: React.FC = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Проверяем видимость заголовка
        if (rect.top < windowHeight - rect.height / 2) {
          setIsTitleVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем начальное положение при монтировании

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.skillsContainer}>
      {/* Заголовок секции */}
      <div
        ref={titleRef}
        className={`${styles.sectionTitleContainer} ${
          isTitleVisible ? styles.visible : styles.hidden
        }`}
      >
        <h2 className={styles.sectionTitle}>My Skills</h2>
      </div>

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
            "PHP",
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

      {/* Новый стик с языками */}
      <div className={styles.rightContainerBottom}>
    <SkillStick
      title="Languages"
      items={[
      "German: B2+",
      "English: B2",
      "Russian: C1",
      "Armenian: Native/C1",
    ]}
    direction="right" /* Указываем направление "справа" */
     />
     </div>

      {/* Социальные ссылки */}
      <div className={styles.socialLinks}>
        <CustomButton
          width="200px"
          text={"GitHub"}
          onClick={() => window.open("https://github.com/ElmiraHR", "_blank")}
        />
        <CustomButton
          width="200px"
          text={"LinkedIn"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/elmira-hrachyan-865679314/",
              "_blank"
            )
          }
        />
        <CustomButton
          width="200px"
          text={"Xing"}
          onClick={() =>
            window.open(
              "https://www.xing.com/profile/Elmira_Hrachyan/web_profiles",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default SkillsPage;
