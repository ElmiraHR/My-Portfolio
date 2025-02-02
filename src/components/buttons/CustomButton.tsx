import React from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  width: string; // Ширина кнопки
  text: string; // Текст на кнопке
  type?: "button" | "submit" | "reset"; // Укажите возможные значения
  onClick?: () => void; // Действие при клике (необязательно)
}


const CustomButton: React.FC<CustomButtonProps> = ({
  width,
  text,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={styles.customButton}
      style={{ width }}
      type={type}
      onClick={onClick} // Передаём onClick только если он есть
    >
      {text}
    </button>
  );
};


export default CustomButton;
