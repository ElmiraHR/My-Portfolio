import React, { useState } from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (contentKey: string) => {
    setModalContent(t(contentKey));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}> © 2025</div>
      <div className={styles.right}>
        <button onClick={() => handleOpenModal('footer.impressumContent')}>
          {t('footer.impressum')}
        </button>
        <button onClick={() => handleOpenModal('footer.privacyContent')}>
          {t('footer.privacy')}
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <pre>{modalContent}</pre>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 