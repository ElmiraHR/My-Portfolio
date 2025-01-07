import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';
import navBg from '../../assets/nav_bg.svg';
import logo from '../../assets/logo_el.svg';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Обработчик клика вне меню
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // Закрыть меню, если клик произошёл вне навигации
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Функция для закрытия меню при клике на ссылку
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      key={i18n.language}
      className={styles.navigation}
      style={{ backgroundImage: `url(${navBg})` }}
    >
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Меню навигации */}
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>{t('navigation.home')}</a></li>
        <li><a href="#about" onClick={handleLinkClick}>{t('navigation.about')}</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>{t('navigation.skills')}</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>{t('navigation.projects')}</a></li>
        <li><a href="#contacts" onClick={handleLinkClick}>{t('navigation.contacts')}</a></li>
        
        {/* Переключатель языков */}
        <div className={styles.languageSwitcher}>
          <button
            className={styles.langBtn}
            onClick={() => {
              i18n.changeLanguage('de');
              setMenuOpen(false);
            }}
          >
            De
          </button>
          <button
            className={styles.langBtn}
            onClick={() => {
              i18n.changeLanguage('en');
              setMenuOpen(false);
            }}
          >
            En
          </button>
          <button
            className={styles.langBtn}
            onClick={() => {
              i18n.changeLanguage('ru');
              setMenuOpen(false);
            }}
          >
            Ru
          </button>
        </div>
      </ul>

      {/* Бургер-меню */}
      <div
        className={styles.burger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
