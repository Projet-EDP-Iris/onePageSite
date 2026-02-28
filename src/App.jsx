import './App.css'
import React, { useEffect, useState } from 'react';
import CalendarCarousel from './components/CalendarCarousel';
import PricingCard from './components/PricingCard';
import { translations } from './translations';

const getInitialLocale = () => {
  const storedLocale = localStorage.getItem('iris-locale');
  if (storedLocale && translations[storedLocale]) {
    return storedLocale;
  }
  return 'fr';
};

function App() {
  const [locale, setLocale] = useState(getInitialLocale);
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const t = translations[locale] || translations.fr;

  const setLocaleAndPersist = (newLocale) => {
    const safeLocale = translations[newLocale] ? newLocale : 'fr';
    setLocale(safeLocale);
    localStorage.setItem('iris-locale', safeLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.cursor-glow');
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  useEffect(() => {
    // Check if user has already seen the questionnaire
    const hasSeenQuestionnaire = localStorage.getItem('hasSeenQuestionnaire');

    if (!hasSeenQuestionnaire) {
      // Show questionnaire after 2 seconds
      const timer = setTimeout(() => {
        setShowQuestionnaire(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeQuestionnaire = () => {
    setShowQuestionnaire(false);
    localStorage.setItem('hasSeenQuestionnaire', 'true');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const teamMembers = [
    { name: 'Dan Lyn Bayan Medou', linkedin: 'https://www.linkedin.com/in/dan-lyn-bayan-medou-614404190/', imageUrl: '/image/team/dan.jpeg' },
    { name: 'Sacha Halimi', linkedin: 'https://www.linkedin.com/in/sacha-halimi-438393327/', imageUrl: '/image/team/sacha.jpeg' },
    { name: 'Marco Luis', linkedin: 'https://www.linkedin.com/in/marco-luis1/' },
    { name: 'Jerobel Otindo', linkedin: 'https://www.linkedin.com/in/jerobel-otindo-9030a533a/', imageUrl: '/image/team/jerobel.jpeg' },
    { name: 'Catrielle Michelle Kotti', linkedin: 'https://www.linkedin.com/in/catrielle-michelle-kotti/', imageUrl: '/image/team/catrielle.jpeg' }
  ];

  const pricingPlans = t.pricing.plans;

  return (
    <>
      <header className='head'>
	<div className="head-nav-wrap">
	  <button
	    type="button"
	    className={`nav-burger ${navOpen ? 'nav-burger-open' : ''}`}
	    aria-label="Menu"
	    aria-expanded={navOpen}
	    onClick={() => setNavOpen((prev) => !prev)}
	  >
	    <span className="nav-burger-line" />
	    <span className="nav-burger-line" />
	    <span className="nav-burger-line" />
	  </button>
	  <nav className={`navi ${navOpen ? 'navi-open' : ''}`}>
	    <a href="#download" className="download-btn" onClick={() => setNavOpen(false)}>{t.nav.download}</a>
	    <a href="#download" onClick={() => setNavOpen(false)}>{t.nav.iris}</a>
	    <a href="#pricing" onClick={() => setNavOpen(false)}>{t.nav.pricing}</a>
	    <a href="#about" onClick={() => setNavOpen(false)}>{t.nav.aboutUs}</a>
	    <a href="#faq" onClick={() => setNavOpen(false)}>{t.nav.faq}</a>
	  </nav>
	</div>
	<div className="lang-toggle" role="group" aria-label="Switch language">
	  <button type="button" className={`lang-option ${locale === 'fr' ? 'lang-active' : ''}`} onClick={() => setLocaleAndPersist('fr')} aria-current={locale === 'fr' ? 'true' : undefined}>FR</button>
	  <span className="lang-sep">|</span>
	  <button type="button" className={`lang-option ${locale === 'en' ? 'lang-active' : ''}`} onClick={() => setLocaleAndPersist('en')} aria-current={locale === 'en' ? 'true' : undefined}>EN</button>
	</div>
</header>

      <section className='hero' id="download">
        <div className="cursor-glow"></div>

        <div className="hero-background">
          <img src="/image/ir.png" className="bg-img" alt="Iris background"></img>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="headline">
            {t.hero.headlineBr}<br />{t.hero.headlineBr2}
          </h1>
          <p className="subtext">
            {t.hero.subtext}
          </p>

          <div className="hero-cta">
            <a href="#download" className="hero-download-btn">{t.hero.cta}</a>
            <p className="hero-subtext">
              {t.hero.subtextCta}<a href="#" className="demo-link">{t.hero.bookDemo}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="video-tutorial-section">
        <h2>{t.video.title}</h2>
        <p>{t.video.description}</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title={t.video.iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

 <section class="trusted-section">

    
    <div class="top-line"></div>

    <h2 className="title">
      <span className="gradient">{t.trusted.trustedBy}</span>
      <span className="italic">{t.trusted.leading}</span><br />
      {t.trusted.brands}
    </h2>

    <div class="logos">
      <img src="/image/Frame.png"  />
      <img src="/image/Frame (1).png"  />
    </div>

  </section>

  <CalendarCarousel locale={locale} />

    <section className='allmajor'>
       <div className="container">
        <h1>{t.allMajor.title}</h1>

        <div className="carousel-wrapper">
            <div className="carousel-track">
                <div className="carousel-item">
                    <img src='/image/gmail - Edited 1.png' alt="Gmail" />
                </div>
                <div className="carousel-item">
                    <img src='/image/googleCalendar - Edited 1.png' alt="Google Calendar" />
                </div>
                <div className="carousel-item">
                    <img src='/image/calendar - Edited 1.png' alt="Calendar" />
                </div>
                <div className="carousel-item">
                    <img src='/image/Slack (icon — Colour).png' alt="Slack" />
                </div>
            </div>
        </div>

        <a href="#download" className="modern-download-button">
            <span>{t.allMajor.downloadNow}</span>
            <span className="arrow-icon">→</span>
        </a>
    </div>
     
    
   
    </section>

    <section id="pricing" className="pricing-section-modern">
      <div className="pricing-header-modern">
        <h2 className="pricing-main-title">
          {t.pricing.title}<span className="pricing-highlight">{t.pricing.scales}</span>{t.pricing.titleSuffix}
        </h2>
        <p className="pricing-subtitle">
          {t.pricing.subtitle}
        </p>
      </div>

      <div className="pricing-grid-modern">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            originalPrice={plan.originalPrice}
            features={plan.features}
            isPopular={plan.isPopular}
            strings={t.pricingCard}
            isEnterprise={plan.isEnterprise ?? index === 2}
          />
        ))}
      </div>
    </section>


    <section id="about">
<div class="container">

        <h1 className="main-title">{t.about.title}</h1>

        
        <div class="cards-grid">
            
            <div className="card card-team">
                <h3 className="card-title">{t.about.theTeam}</h3>
                <div className="team-grid">
                  {teamMembers.map((member) => (
                    <a
                      key={member.linkedin}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-member"
                    >
                      <div className="team-member-avatar" aria-hidden="true">
                        {member.imageUrl ? (
                          <img src={member.imageUrl} alt="" className="team-member-avatar-img" />
                        ) : (
                          <span className="team-member-avatar-emoji">👤</span>
                        )}
                      </div>
                      <span className="team-member-name">{member.name}</span>
                      <span className="team-member-linkedin">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        {t.about.linkedIn}
                      </span>
                    </a>
                  ))}
                </div>
            </div>

            
            <div className="card card-contact">
                <h3 className="card-title card-contact-title">{t.about.getInTouch}</h3>
                <div className="contact-card-actions">
                  <a href="mailto:irisapp42@outlook.com" className="contact-btn">{t.about.contactUs}</a>
                  <a href="https://www.linkedin.com/company/iris-software/" target="_blank" rel="noopener noreferrer" className="contact-linkedin-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    {t.about.linkedIn}
                  </a>
                </div>
            </div>
        </div>


        <div className="faq-header" id="faq">
            <h2 className="faq-title">
                {t.faq.title}<span className="highlight">{t.faq.questions}</span>
            </h2>
            <p className="faq-subtitle">
                {t.faq.subtitle}
            </p>
        </div>


        <div className="accordion">
            {t.faq.items.map((faq, index) => (
              <div key={index} className="accordion-wrapper">
                <button
                  className={`accordion-item ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <svg className="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`accordion-content ${openFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>


        <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <p className="footer-text">
                  {t.footer.tagline}
                </p>
                <p className="footer-email">
                  <a href="mailto:irisapp42@gmail.com">irisapp42@gmail.com</a>
                </p>
              </div>
              <div className="footer-links-section">
                <a href="https://www.linkedin.com/company/iris-software/" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  {t.footer.linkedIn}
                </a>
                <a href="#privacy" className="footer-link">{t.footer.privacyPolicy}</a>
                <a href="#cookies" className="footer-link">{t.footer.cookiePolicy}</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>{t.footer.copyright}</p>
            </div>
        </footer>
    </div>
    </section>

    {showScrollTop && (
      <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    )}

    {showQuestionnaire && (
      <div className="modal-overlay" onClick={closeQuestionnaire}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title-section">
              <h2>{t.modal.title}</h2>
              <p>{t.modal.subtitle}</p>
            </div>
            <button className="modal-close-btn" onClick={closeQuestionnaire}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="modal-body">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScmFU5CmdudW_kN-XKA4KmIL1uurCwUziWb2bA1yfUOTTXWsw/viewform?embedded=true"
              className="questionnaire-iframe"
              title={t.modal.iframeTitle}
            >
              {t.modal.loading}
            </iframe>
          </div>

          <div className="modal-footer">
            <button className="skip-btn" onClick={closeQuestionnaire}>
              {t.modal.skip}
            </button>
            <div className="modal-info">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              {t.modal.once}
            </div>
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default App
   