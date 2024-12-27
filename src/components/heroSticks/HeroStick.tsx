import React, { useEffect, useRef } from 'react';
import styles from './HeroStick.module.css';

interface HeroStickProps {
  heading: string; // Заголовок
  text: string; // Текст, который будет печататься внутри компонента
  buttonLabel: string; // Текст кнопки
  onButtonClick: () => void; // Действие при клике на кнопку
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  }; // Позиционирование компонента
}

const HeroStick: React.FC<HeroStickProps> = ({ heading, text, buttonLabel, onButtonClick, position }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация заголовка
    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        headingRef.current!.style.transition = 'opacity 1s ease, transform 1s ease';
        headingRef.current!.style.opacity = '1';
        headingRef.current!.style.transform = 'translateY(0)';
      }, 800); // Задержка после открытия блока
    }

    // Анимация текста
    const stringArray = text.split('');
    let typingIndex = 0;

    const typeChar = () => {
      if (textRef.current && typingIndex < stringArray.length) {
        textRef.current.innerHTML += stringArray[typingIndex];
        typingIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeChar, 30); // Скорость печати символов

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className={styles.heroStick} style={position}>
      <div className={styles.heading} ref={headingRef}>{heading}</div>
      <div className={styles.textContainer} ref={textRef}></div>
      <button className={styles.heroButton} onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default HeroStick;
