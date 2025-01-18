import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import heroBanner from "../../assets/heroBanner.mp4";
import styles from "./HomePage.module.css";
import HeroStick from "../../components/heroSticks/HeroStick";
import CustomButton from "../../components/buttons/CustomButton";
import PDFCarousel from "../../components/pdfCarousel/PDFCarousel";
import { cvFiles, recommendationFiles, certificateFiles } from "../../assets/filePaths";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [modalContent, setModalContent] = useState<
    { preview: string; pdf: string; name: string }[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;
      video.play();
      const interval = setInterval(() => {
        video.currentTime = 0;
        video.play();
      }, 9000);
      return () => clearInterval(interval);
    }
  }, []);

  const openModal = (files: { preview: string; pdf: string; name: string }[]) => {
    setModalContent(files);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        loop
        className={styles.backgroundVideo}
      >
        <source src={heroBanner} type="video/mp4" />
        {t("homepage.videoFallback")}
      </video>
      <div className={styles.sticksContainer}>
        <div className={styles.stickLeft}>
        <HeroStick
  className="leftStick"
  heading={t("homepage.headingLeft")}
  text={t("homepage.textLeft")}
  buttonLabel={t("homepage.buttonLeft")}
  targetId="projects" // Указываем ID для перехода на проекты
/>
        </div>
        <div className={styles.stickRight}>
        <HeroStick
  className="rightStick"
  heading={t("homepage.headingRight")}
  text={t("homepage.textRight")}
  buttonLabel={t("homepage.buttonRight")}
  targetId="contacts" // Указываем ID для перехода на контакты
/>
        </div>
      </div>
      <div className={styles.heroButtons}>
        <CustomButton
          width="200px"
          text={t("homepage.cvButton")}
          onClick={() => openModal(cvFiles)}
        />
        <CustomButton
          width="250px"
          text={t("homepage.recommendationLettersButton")}
          onClick={() => openModal(recommendationFiles)}
        />
        <CustomButton
          width="200px"
          text={t("homepage.certificatesButton")}
          onClick={() => openModal(certificateFiles)}
        />
      </div>
      <div className={styles.nextPage}></div>
      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        contentLabel="PDF Viewer Modal"
      >
        <PDFCarousel files={modalContent} />
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Home;
