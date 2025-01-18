import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ExperiencePage.module.css";

const experiences = [
  {
    companyKey: "experience.company1",
    roleKey: "experience.role1",
    locationKey: "experience.location1",
    dateKey: "experience.date1",
    descriptionKey: "experience.description1",
  },
  {
    companyKey: "experience.company2",
    roleKey: "experience.role2",
    locationKey: "experience.location2",
    dateKey: "experience.date2",
    descriptionKey: "experience.description2",
  },
  {
    companyKey: "experience.company3",
    roleKey: "experience.role3",
    locationKey: "experience.location3",
    dateKey: "experience.date3",
    descriptionKey: "experience.description3",
  },
  {
    companyKey: "experience.company4",
    roleKey: "experience.role4",
    locationKey: "experience.location4",
    dateKey: "experience.date4",
    descriptionKey: "experience.description4",
  },
  {
    companyKey: "experience.company5",
    roleKey: "experience.role5",
    locationKey: "experience.location5",
    dateKey: "experience.date5",
    descriptionKey: "experience.description5",
  },
  {
    companyKey: "experience.company6",
    roleKey: "experience.role6",
    locationKey: "experience.location6",
    dateKey: "experience.date6",
    descriptionKey: "experience.description6",
  },
];

const ExperiencePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.pageTitle}>{t("experience.pageTitle")}</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={t(exp.companyKey)}
            role={t(exp.roleKey)}
            location={t(exp.locationKey)}
            date={t(exp.dateKey)}
            description={t(exp.descriptionKey)}
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceItem: React.FC<{
  company: string;
  role: string;
  location: string;
  date: string;
  description: string;
}> = ({ company, role, location, date, description }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML = "";
    }

    const textArray = description.split("");
    let index = 0;

    const typeEffect = () => {
      if (descriptionRef.current && index < textArray.length) {
        descriptionRef.current.innerHTML += textArray[index];
        index++;
      } else {
        clearInterval(interval);
      }
    };

    const interval = setInterval(typeEffect, 30);
    return () => clearInterval(interval);
  }, [description]);

  return (
    <div className={styles.experienceItem}>
      <h3 className={styles.company}>{company}</h3>
      <p className={styles.role}>
        {role} • {location} • {date}
      </p>
      <p ref={descriptionRef} className={styles.description}></p>
    </div>
  );
};

export default ExperiencePage;
