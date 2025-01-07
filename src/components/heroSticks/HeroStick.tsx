import React, { useEffect, useRef } from 'react';
import styles from './HeroStick.module.css';
import CustomButton from '../buttons/CustomButton';

interface HeroStickProps {
  className?: string; // Дополнительный класс
  heading: string; // Заголовок
  text: string; // Текст, который будет печататься внутри компонента
  buttonLabel: string; // Текст кнопки
  onButtonClick: () => void; // Действие при клике на кнопку
}

const HeroStick: React.FC<HeroStickProps> = ({
  className,
  heading,
  text,
  buttonLabel,
  onButtonClick,
}) => {
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
    if (textRef.current) {
      textRef.current.innerHTML = ''; // Очищаем контейнер перед началом анимации
    }

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
  }, [text]); // Зависимость от текста: анимация перезапускается при смене текста

  return (
    <div className={`${styles.heroStick} ${className || ''}`}>
      <div className={styles.heading} ref={headingRef}>
        {heading}
      </div>
      <div className={styles.textContainer} ref={textRef}></div>
      <CustomButton width="200px" text={buttonLabel} onClick={onButtonClick} />
    </div>
  );
};

export default HeroStick;
