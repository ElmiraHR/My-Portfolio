import React from "react";
import styles from "./ScrollCircle.module.css";

interface ScrollCircleProps {
  direction: "up" | "down"; // Направление стрелки
  visible: boolean; // Видимость кнопки
  onClick: () => void; // Действие при клике
  position: "left" | "right"; // Позиция: слева или справа
}

const ScrollCircle: React.FC<ScrollCircleProps> = ({
  direction,
  visible,
  onClick,
  position,
}) => {
  if (!visible) return null;

  return (
    <div
      className={`${styles.scrollCircle} ${
        position === "left" ? styles.left : styles.right
      }`}
      onClick={onClick}
    >
      <span className={styles.arrow}>{direction === "down" ? "↓" : "↑"}</span>
    </div>
  );
};

export default ScrollCircle;
