import React, { useState } from "react";
import styles from "./ProjectCarousel.module.css";

import meetup from "../../assets/meetup.svg";
import herren from "../../assets/herren.svg";
import myPortfolio from "../../assets/myPortfolio.svg";
import petShop from "../../assets/petShop.svg";
import mntn from "../../assets/mntn.svg";
import insta from "../../assets/insta.svg";
import rick from "../../assets/Rick.svg";
import nova from "../../assets/nova.svg";
import kunst from "../../assets/kunst.svg";

const projects = [
  { id: 1, image: nova },
  { id: 2, image: herren },
  { id: 3, image: myPortfolio },
  { id: 4, image: meetup },
  { id: 5, image: kunst },
  { id: 6, image: petShop },
  { id: 7, image: mntn },
  { id: 8, image: insta },
  { id: 9, image: rick },
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {projects.map((project, index) => {
          const isActive = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + projects.length) % projects.length;
          const isRight =
            index === (currentIndex + 1) % projects.length;

          return (
            <img
              key={project.id}
              src={project.image}
              alt={`Project ${project.id}`}
              className={`${styles.image} ${
                isActive
                  ? styles.active
                  : isLeft
                  ? styles.left
                  : isRight
                  ? styles.right
                  : styles.hidden
              }`}
            />
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button className={styles.prevButton} onClick={handlePrev}></button>
        <button className={styles.nextButton} onClick={handleNext}></button>
      </div>
      <div className={styles.pagination}>
        {projects.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
