import React, { useState } from 'react';
import styles from './Navigation.module.css';
import navBg from '../../assets/nav_bg.svg';
import logo from '../../assets/logo_el.svg';

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={styles.navigation}
      style={{ backgroundImage: `url(${navBg})` }}
    >
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Меню навигации */}
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      {/* Переключатель языков */}
      <div className={styles.languageSwitcher}>
        <button className={styles.langBtn}>De</button>
        <button className={styles.langBtn}>En</button>
        <button className={styles.langBtn}>Ru</button>
      </div>

      {/* Бургер-меню (для маленьких экранов) */}
      <div
        className={styles.burger}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Языки внутри бургер-меню на маленьких экранах */}
      {isMenuOpen && (
        <div className={styles.languageSwitcherMobile}>
          <button className={styles.langBtn}>De</button>
          <button className={styles.langBtn}>En</button>
          <button className={styles.langBtn}>Ru</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
