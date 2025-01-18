import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.css";
import navBg from "../../assets/nav_bg.svg";
import logo from "../../assets/logo_el.svg";

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Закрыть меню при клике вне навигации
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Логика для фиксации навигации
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Плавная прокрутка к разделу
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Закрыть меню после клика
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.navigation} ${isSticky ? styles.sticky : ""}`}
      style={{ backgroundImage: `url(${navBg})` }}
    >
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
          onClick={() => scrollToSection("home")}
        />
      </div>

      {/* Меню навигации */}
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <li>
          <a href="#home" className={styles.navLink}>
            {t("navigation.home")}
          </a>
        </li>
        <li>
          <a href="#skills" className={styles.navLink}>
            {t("navigation.skills")}
          </a>
        </li>
        <li>
          <a href="#experience" className={styles.navLink}>
            {t("navigation.experience")}
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            {t("navigation.projects")}
          </a>
        </li>
        <li>
          <a href="#contacts" className={styles.navLink}>
            {t("navigation.contacts")}
          </a>
        </li>

        {/* Переключатель языков */}
        <div className={styles.languageSwitcher}>
          <button
            className={styles.langBtn}
            onClick={() => i18n.changeLanguage("de")}
          >
            De
          </button>
          <button
            className={styles.langBtn}
            onClick={() => i18n.changeLanguage("en")}
          >
            En
          </button>
          <button
            className={styles.langBtn}
            onClick={() => i18n.changeLanguage("ru")}
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
