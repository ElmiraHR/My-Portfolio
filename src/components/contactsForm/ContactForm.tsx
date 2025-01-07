import React, { useEffect, useState, useRef } from "react";
import styles from "./ContactForm.module.css";
import CustomButton from "../buttons/CustomButton";
import line from "../../assets/contacts_projects_line.svg";

const ContactForm: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = formRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Проверяем, видна ли форма
      },
      { threshold: 0.1 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalMessage("Message successfully sent!");
        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
          (event.target as HTMLFormElement).reset();
        }, 30000);
      } else {
        setModalMessage("Failed to send the message. Please try again later.");
        setIsModalVisible(true);
        setTimeout(() => {
          setIsModalVisible(false);
        }, 300000);
      }
    } catch (error) {
      console.error("Network error", error);
      setModalMessage("An error occurred. Please check your connection.");
      setIsModalVisible(true);
      setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
    }
  };
  return (
    <div className={styles.contactContainer}>
      <img src={line} alt="" className={styles.decorativeLine} />
      <div className={styles.sectionTitleContainer}>
        <h2 className={styles.sectionTitle}>Contact me</h2>
      </div>
      <div
        className={`${styles.formWrapper} ${
          isInView ? styles.open : styles.close
        }`}
        ref={formRef}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className={styles.textarea}
            placeholder="Your Message"
            required
          ></textarea>
          <CustomButton width="90%" text="Send" onClick={() => {}} />
        </form>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: elhrachyan@gmail.com</p>
        <p>
          LinkedIn: {" "}
          <a href="https://www.linkedin.com/in/elmira-hrachyan-865679314/">
            LinkedIn Profile
          </a>
        </p>
        <p>
          Xing: {" "}
          <a href="https://www.xing.com/profile/Elmira_Hrachyan">Xing Profile</a>
        </p>
        <p>
          Telegram: <a href="https://t.me/Elka_Hr_997">@Elka_Hr_997</a>
        </p>
      </div>
      {/* Модальное окно */}
      {isModalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
