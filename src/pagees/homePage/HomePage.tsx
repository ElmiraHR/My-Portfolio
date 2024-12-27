import React, { useEffect, useRef } from 'react';
import heroBanner from '../../assets/heroBanner.mp4'; // Импорт видео
import styles from './HomePage.module.css'; // Импорт стилей

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
       
      </div>
    </div>
  );
};

export default Home;
