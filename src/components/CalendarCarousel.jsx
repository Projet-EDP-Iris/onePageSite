import React, { useState } from 'react';
import './CalendarCarousel.css';
import { translations } from '../translations';

const CalendarCarousel = ({ locale = 'fr' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { sectionTitle, cards: cardsData } = translations[locale]?.calendarCarousel || translations.fr.calendarCarousel;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="calendar-carousel-section">
      <h2 className="carousel-section-title">{sectionTitle}</h2>

      <div className="calendar-cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="calendar-card">
            <div className="calendar-card-image-placeholder">
              {card.image ? (
                <img src={card.image} alt={card.title} className="calendar-card-image" />
              ) : (
                <div className="calendar-card-image-fallback" aria-hidden="true" />
              )}
            </div>

            <div className="calendar-card-content">
              <h3 className="calendar-card-title">{card.title}</h3>
              <p className="calendar-card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCarousel;
