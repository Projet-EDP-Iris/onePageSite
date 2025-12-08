import React, { useState } from 'react';
import './CalendarCarousel.css';

const CalendarCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exactly 3 cards as specified
  const cardsData = [
    {
      id: 1,
      title: "Weekly Overview",
      description: "Track your weekly calendar patterns and optimize your schedule for maximum productivity.",
    },
    {
      id: 2,
      title: "Meeting Insights",
      description: "Analyze meeting frequency and duration to better manage your time and commitments.",
    },
    {
      id: 3,
      title: "Time Allocation",
      description: "Visualize how you spend your time across different categories and projects.",
    }
  ];

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
      <h2 className="carousel-section-title">Email analysis</h2>

      <div className="calendar-cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="calendar-card">
            <div className="calendar-card-image-placeholder">
              <span className="placeholder-icon">📊</span>
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
