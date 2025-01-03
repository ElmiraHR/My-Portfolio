import React from "react";
import ContactForm from "../../components/contactsForm/ContactForm";
import styles from "./ContactPage.module.css";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
