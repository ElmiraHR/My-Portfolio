import React, { useEffect, useRef } from 'react';
import styles from './HeroStick.module.css';
import CustomButton from '../buttons/CustomButton';

interface HeroStickProps {
  className?: string;
  heading: string;
  text: string;
  buttonLabel: string;
  targetId: string; // ID элемента, к которому нужно прокрутить
}

const HeroStick: React.FC<HeroStickProps> = ({
  className,
  heading,
  text,
  buttonLabel,
  targetId,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        headingRef.current!.style.transition = 'opacity 1s ease, transform 1s ease';
        headingRef.current!.style.opacity = '1';
        headingRef.current!.style.transform = 'translateY(0)';
      }, 800);
    }

    if (textRef.current) {
      textRef.current.innerHTML = '';
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

    const typingInterval = setInterval(typeChar, 30);

    return () => clearInterval(typingInterval);
  }, [text]);

  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.heroStick} ${className || ''}`}>
      <div className={styles.heading} ref={headingRef}>
        {heading}
      </div>
      <div className={styles.textContainer} ref={textRef}></div>
      <CustomButton width="200px" text={buttonLabel} onClick={handleScroll} />
    </div>
  );
};

export default HeroStick;
