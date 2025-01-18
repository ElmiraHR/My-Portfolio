import React, { useRef, useState } from "react";
import Slider from "react-slick";

import styles from "./PDFCarousel.module.css";

interface PDFCarouselProps {
  files: { preview: string; pdf: string; name: string }[];
}

const PDFCarousel: React.FC<PDFCarouselProps> = ({ files }) => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings} className={styles.carousel}>
        {files.map((file, index) => (
          <div key={index} className={styles.pdfSlide}>
            <img
              src={file.preview}
              alt={file.name}
              className={styles.pdfImage}
              onClick={() => window.open(file.pdf, "_blank")}
            />
            <p className={styles.fileName}>{file.name}</p>
          </div>
        ))}
      </Slider>

      {/* Кастомная пагинация */}
      <div className={styles.paginationContainer}>
        {files.map((_, index) => (
          <button
            key={index}
            className={`${styles.paginationButton} ${
              index === currentSlide ? styles.activeButton : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PDFCarousel;
