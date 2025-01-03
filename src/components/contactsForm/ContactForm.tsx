import React, { useEffect, useState, useRef } from "react";
import styles from "./ContactForm.module.css";
import CustomButton from "../buttons/CustomButton";
import line from "../../assets/contacts_projects_line.svg"

const ContactForm: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Проверяем, видна ли форма
      },
      { threshold: 0.1 } // Срабатывает, если видно хотя бы 10% формы
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div className={styles.contactContainer}>
      {/* Абсолютное изображение сверху */}
      <img
        src={line}
        alt=""
        className={styles.decorativeLine}
      />
      <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>Contact me</h2>
      </div>
      <div
        className={`${styles.formWrapper} ${
          isInView ? styles.open : styles.close
        }`}
        ref={formRef}
      >
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
            required
          ></textarea>
          <CustomButton
            width="90%"
            text="Send"
            onClick={() => {
              alert("Message sent!");
            }}
          />
        </form>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: elhrachyan@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/elmira-hrachyan-865679314/">
            LinkedIn Profile
          </a>
        </p>
        <p>
          Xing:{" "}
          <a href="https://www.xing.com/profile/Elmira_Hrachyan">Xing Profile</a>
        </p>
        <p>
          Telegram: <a href="https://t.me/Elka_Hr_997">@Elka_Hr_997</a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
