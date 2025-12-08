import './App.css'
import React, { useEffect, useState } from 'react';
import CalendarCarousel from './components/CalendarCarousel';
import PricingCard from './components/PricingCard';

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

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

  const faqData = [
    {
      question: "What is Iris?",
      answer: "Iris is a productivity app that helps you organize your life with one click. It integrates with all your favorite apps to streamline your daily tasks and calendar."
    },
    {
      question: "How does Iris work?",
      answer: "Iris connects to your calendar, email, and other productivity tools to provide intelligent scheduling and task management. It analyzes your patterns and helps optimize your daily routine."
    },
    {
      question: "What apps does Iris integrate with?",
      answer: "Iris integrates with Gmail, Google Calendar, Apple Calendar, Slack, and many other popular productivity applications to give you a unified experience."
    },
    {
      question: "Which platforms is Iris available on?",
      answer: "Iris is available on iOS, Android, Windows, and macOS, ensuring you can stay organized across all your devices."
    },
    {
      question: "Who is Iris for?",
      answer: "Iris is perfect for professionals, students, and anyone looking to better manage their time and tasks. Whether you're juggling multiple projects or just want to stay on top of your schedule, Iris can help."
    },
    {
      question: "How is Iris different from other productivity tools?",
      answer: "Iris stands out with its AI-powered insights, seamless multi-app integration, and intuitive interface. It learns from your habits to provide personalized recommendations and automation."
    }
  ];

  const pricingPlans = [
    {
      plan: 'Free',
      price: 0,
      features: [
        '3 calendar runs per month',
        'Basic calendar integration',
        'Email notifications',
        'Mobile app access',
        'Community support'
      ]
    },
    {
      plan: 'Pro',
      price: 29,
      originalPrice: 35,
      isPopular: true,
      features: [
        'Unlimited calendar runs',
        'Advanced AI scheduling',
        'All app integrations',
        'Priority support',
        'Custom workflows',
        'Team collaboration (up to 5)',
        'Analytics dashboard',
        'Export reports'
      ]
    },
    {
      plan: 'Enterprise',
      price: 99,
      originalPrice: 115,
      features: [
        'Everything in Pro',
        'Unlimited team members',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom integrations',
        'SSO & advanced security',
        'SLA guarantee',
        'White-label options',
        'API access'
      ]
    }
  ];

  return (
    <>
      <header className='head'>
	<nav className='navi'>
	<a href="#download" className="download-btn">Download</a>
	<a href="#hero">Iris</a>
	<a href="#pricing">Pricing</a>
	<a href="#about">About us</a>
	<a href="#faq">FAQ</a>
	</nav>
</header>

      <section className='hero' id="hero">
        <div className="cursor-glow"></div>

        <div className="hero-background">
          <img src="/image/ir.png" className="bg-img" alt="Iris background"></img>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="headline">
            One click to<br />organize your life
          </h1>
          <p className="subtext">
            Let iris guide you through your day to day
          </p>

          <div className="hero-cta">
            <a href="#download" className="hero-download-btn">DOWNLOAD</a>
            <p className="hero-subtext">
              Start monitoring for free or <a href="#" className="demo-link">book a demo</a>
            </p>
          </div>
        </div>
      </section>

      <section className="video-tutorial-section">
        <h2>How Iris Works</h2>
        <p>Watch our quick tutorial to learn how Iris can transform your productivity and help you organize your life in just one click.</p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Iris Tutorial Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

 <section class="trusted-section">

    
    <div class="top-line"></div>

    <h2 class="title">
      <span class="gradient">Trusted by</span>
      <span class="italic"> leading</span><br />
      brands
    </h2>

    <div class="logos">
      <img src="/image/Frame.png"  />
      <img src="/image/Frame (1).png"  />
    </div>

  </section>

  <CalendarCarousel />

    <section className='allmajor'>
       <div className="container">
        <h1>All Major Apps Integrated</h1>

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
            <span>Download Now</span>
            <span className="arrow-icon">→</span>
        </a>
    </div>
     
    
   
    </section>

    <section id="pricing" className="pricing-section-modern">
      <div className="pricing-header-modern">
        <h2 className="pricing-main-title">
          Choose the plan that <span className="pricing-highlight">scales</span> with you
        </h2>
        <p className="pricing-subtitle">
          Start free and upgrade as you grow. All plans include our core features with a 90-day money-back guarantee.
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
          />
        ))}
      </div>
    </section>


    <section id="about">
<div class="container">

        <h1 class="main-title">About Us</h1>

        
        <div class="cards-grid">
            
            <div class="card">
                <div class="icon-group">
                    <div class="icon-box"></div>
                    <div class="icon-box"></div>
                    <div class="icon-box"></div>
                    <div class="icon-box"></div>
                </div>
                <h3 class="card-title">The Team</h3>
                <p class="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </p>
            </div>

            
            <div class="card">
                <button class="contact-btn">Contact us</button>
                <div class="icon-group">
                    <div class="icon-box"></div>
                </div>
                <h3 class="card-title">Our Mission</h3>
                <p class="card-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </p>
            </div>
        </div>


        <div className="faq-header" id="faq">
            <h2 className="faq-title">
                Still have <span className="highlight">questions?</span>
            </h2>
            <p className="faq-subtitle">
                Find answers to common questions about our AI-powered productivity platform.
            </p>
        </div>


        <div className="accordion">
            {faqData.map((faq, index) => (
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
                  Iris - Organize your life with one click. Intelligent scheduling and task management for the modern professional.
                </p>
                <p className="footer-email">
                  <a href="mailto:irisapp42@gmail.com">irisapp42@gmail.com</a>
                </p>
              </div>
              <div className="footer-links-section">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="#privacy" className="footer-link">Privacy Policy</a>
                <a href="#cookies" className="footer-link">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Iris. All rights reserved.</p>
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
              <h2>Help Us Improve Iris</h2>
              <p>Share your thoughts and help shape the future of productivity</p>
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
              title="Iris Questionnaire"
            >
              Loading…
            </iframe>
          </div>

          <div className="modal-footer">
            <button className="skip-btn" onClick={closeQuestionnaire}>
              Skip for now
            </button>
            <div className="modal-info">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              This will only appear once
            </div>
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default App
   