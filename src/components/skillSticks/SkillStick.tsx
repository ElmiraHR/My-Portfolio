import React, { useEffect, useRef, useState } from "react";
import styles from "./SkillStick.module.css";

interface SkillStickProps {
  title: string; // Заголовок
  items: string[]; // Список пунктов
  direction: "left" | "right"; // Направление заезда
}

const SkillStick: React.FC<SkillStickProps> = ({ title, items, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickRef.current) {
        const rect = stickRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Добавляем отступ для раннего исчезновения/появления
        const offset = 50; // Отступ в пикселях
  
        // Проверяем видимость элемента с учётом отступа
        const isInView =
          rect.top < windowHeight - rect.height / 2 - offset &&
          rect.bottom > rect.height / 2 + offset;
  
        setIsVisible(isInView);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверяем начальное положение при монтировании
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div
      ref={stickRef}
      className={`${styles.skillStick} ${isVisible ? styles.visible : styles.hidden} ${
        direction === "left" ? styles.fromLeft : styles.fromRight
      }`}
    >
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillStick;
