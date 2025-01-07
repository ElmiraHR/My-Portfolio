import React from "react";
import Slider from "react-slick";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./PDFCarousel.module.css";

interface PDFCarouselProps {
  pdfFiles: string[]; // Список путей к PDF-файлам
}

const PDFCarousel: React.FC<PDFCarouselProps> = ({ pdfFiles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {pdfFiles.map((pdf, index) => (
        <div key={index} className={styles.pdfViewer}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js`}>

            <Viewer fileUrl={pdf} />
          </Worker>
        </div>
      ))}
    </Slider>
  );
};

export default PDFCarousel;
