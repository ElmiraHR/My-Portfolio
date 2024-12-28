import React from 'react';
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  width: string; // Ширина кнопки
  text: string; // Текст на кнопке
  onClick: () => void; // Действие при клике
}

const CustomButton: React.FC<CustomButtonProps> = ({ width, text, onClick }) => {
  return (
    <button
      className={styles.customButton}
      style={{ width }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;