import React, { useEffect, useRef } from 'react';
import heroBanner from '../../assets/heroBanner.mp4'; // Импорт видео
import styles from './HomePage.module.css'; // Импорт стилей
import HeroStick from '../../components/heroSticks/HeroStick.tsx';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    // Функция для перезапуска видео
    const restartVideo = () => {
      if (video) {
        video.currentTime = 0; // Сброс времени видео
        video.play();          // Воспроизведение
      }
    };

    // Запуск видео при загрузке компонента
    if (video) {
      restartVideo();

      // Перезапуск каждые 7 секунд
      const interval = setInterval(restartVideo, 9000);

      // Очистка интервала при размонтировании
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} muted className={styles.backgroundVideo}>
        <source src={heroBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
      <HeroStick
      className="leftStick"
  heading="Hi there, I'm Elmira!"
  text="Welcome to my portfolio! I'm a web developer who loves turning creative ideas into functional, beautiful websites. Let’s explore the magic of clean code and captivating design together."
  buttonLabel="Explore My Work"
  onButtonClick={() => window.scrollTo(0, document.body.scrollHeight)}
  position={{ top: '10px', left: '15%' }}
      />
       <HeroStick
  className="rightStick"
  heading="About This Site"
  text="This is where creativity meets functionality. Dive into my projects, explore my skills, and discover how I can help bring your ideas to life through modern web development and thoughtful design."
  buttonLabel="Let’s Collaborate"
  onButtonClick={() => window.scrollTo(0, document.body.scrollHeight)}
  position={{ top: '480px', right: '15%' }}
       />
      </div>
    </div>
  );
};

export default Home;
