import React from 'react';
import './PricingCard.css';

const PricingCard = ({ plan, price, originalPrice, features, isPopular, strings, isEnterprise }) => {
  const s = strings || {};
  return (
    <div className={`pricing-card-modern ${isPopular ? 'pricing-card-popular' : ''}`}>
      {isPopular && s.mostPopular && <div className="popular-badge">{s.mostPopular}</div>}

      <div className="pricing-header">
        <h3 className="pricing-plan-name">{plan}</h3>
        <div className="pricing-amount">
          <span className="price-symbol">$</span>
          <span className="price-value">{price}</span>
          <span className="price-period">{s.perMonth != null ? s.perMonth : '/mo'}</span>
        </div>
        {originalPrice && (
          <div className="pricing-original">
            <span className="original-price">${originalPrice}</span>
            <span className="savings-badge">{s.save != null ? s.save : 'Save'} {Math.round((1 - price/originalPrice) * 100)}%</span>
          </div>
        )}
      </div>

      <button className={`pricing-cta-btn ${isPopular ? 'cta-primary' : 'cta-secondary'}`}>
        {isEnterprise ? (s.contactSales || 'Contact Sales') : (s.getStarted || 'Get Started')}
      </button>

      <div className="pricing-features">
        <p className="features-title">{s.whatsIncluded != null ? s.whatsIncluded : "What's included:"}</p>
        <ul className="features-list-modern">
          {features.map((feature, index) => (
            <li key={index} className="feature-item-modern">
              <svg className="check-icon-modern" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pricing-card-footer">
        <svg className="lock-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
        {s.guarantee != null ? s.guarantee : '90-day money-back guarantee • Cancel anytime'}
      </div>
    </div>
  );
};

export default PricingCard;
