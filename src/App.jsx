import './App.css'
import React from 'react';
function App() {
  

  return (
    <>
      <div>
  <header className='head'>
	<nav className='navi'>
	<a href="">Download</a>
	<a href="">Iris</a>
	<a href="">Pricing</a>
	<a href="">About us</a>
	<a href="">FAQ</a>
	</nav>
</header>
      </div> 

      <section className='logo-bg'>
<img src="public/image/cat.png" className="logo"/>
      </section>

      <section className='hero'>
         
          <img src="public/image/ir.png" className="bg-img"></img>

        
              <h1 className="headline">One click to <br></br>organisze your life</h1>
                <p className="subtext">let iris guide you through your<br></br> day to day .</p>
          
          
            <div className="hero-holder">
      <div className="card">
        <div className="card-inner">
          <a href="#" className="btn">DOWNLOAD</a>
          <p className="small-text">Start monitoring for free or <a href="#">book a demo</a></p>
        </div>
      </div>
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
      <img src="public/image/frame.png"  />
      <img src="public/image/frame (1).png"  />
    </div>

    <div class="calendar-row">
      <h3>Calendar analysis</h3>

      <div class="icons">
        <div class="circle c1"></div>
        <div class="circle c2"></div>
        <div class="separator"></div>
        <button class="faq-btn">FAQ</button>
      </div>
    </div>

  </section>

    <section>
      <div className='carousel-container'>
    <div>

         <div>
            <video  width="800" className='vido'>
  <source src="public/video/Delivery Iris.mp4" type="video/mp4"></source>
  Votre navigateur ne supporte pas la vidéo.
</video>

        </div>
    </div>
</div>
    </section>

    <section className='allmajor'>
       <div class="container">
        <h1>All Major Apps Integrated</h1>
        
        <div class="icons-section">
            <div class="icons-wrapper">
                <div class="glow-effect"></div>
                
                <div class="icons-container">
                    
                    <div class="gmail-icon">
                       <img src='public/image/gmail - Edited 1.png' width={100} height={100}></img>
                    </div>
                    
                  
                    <div class="google-calendar">
                        <img src='public/image/googleCalendar - Edited 1.png' width={100} height={100}></img>
                    </div>
                    
                  
                    <div class="ios-calendar">
                       <img src='public/image/calendar - Edited 1.png' width={64} height={64}></img>
                    </div>
                    
                    
                    <div class="slack-icon">
                       <img src='public/image/Slack (icon — Colour).png' width={54} height={54}></img>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" class="download-button">
            <span>Download Now</span>
            <span class="arrow-icon">→</span>
        </a>
    </div>
     
    
   
    </section>

    <section>
      <div>
        <img src=''></img>
      </div>
       <div className="text-center mb-12 mt-24" style={{textAlign:"center"}}>
          <h2 className="mb-2">
            Choose the plan that <span className="text-[#ff7b3d] italic font-serif">scales</span>
          </h2>
          <h2 className="text-[#ff7b3d] italic font-serif mb-6">with you</h2>
          <p className="text-gray-500 text-sm">
            Our FREE, users will be able to complete 3 runs per month and save first<br />
            run data snapshot
          </p>
        </div>

         <div class="container">
        <div class="pricing-grid">
        
            <div class="pricing-card">
                <div class="card-header">
                    <h3 class="card-title">Starter</h3>
                    <p class="card-description">
                        Perfect for individuals and small teams just getting started with social media insights.
                    </p>
                    <div class="trusted-by">
                        <span class="emoji">👤</span>
                        <span>Join 2,500+ users</span>
                    </div>
                </div>

                <div class="pricing-section">
                    <div class="price-wrapper">
                        <span class="price">$29</span>
                        <span class="period">/mo</span>
                    </div>
                    <div class="price-details">
                        <span class="original-price">$35</span>
                        <span class="savings">Save 17%</span>
                    </div>
                    <div class="revenue-info">
                        <span class="emoji">💰</span>
                        <span>Avoid $500+ in manual research costs</span>
                    </div>
                </div>

                <button class="cta-button cta-secondary">Get Early Bird Discount</button>

                <div class="guarantee">
                    <span class="emoji">🔒</span>
                    <span>90-day money-back guarantee</span>
                </div>

                <div class="features-section">
                    <p class="features-title">What's included:</p>
                    <ul class="features-list">
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>30 days free tier (no credit card)</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>5 AI-copilot for every query</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>3 social media platforms (Reddit, Twitter, LinkedIn)</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Basic sentiment analysis</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Trend detection dashboard</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>1,000 monitored conversations/month</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Weekly insight reports</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Scheduled PDF reports and email alerts</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Email support</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>In-App live access</span>
                        </li>
                    </ul>
                </div>

                <div class="card-footer">
                    Billed monthly • Cancel anytime
                </div>
            </div>

          
            <div class="pricing-card">
                <div class="card-header">
                    <h3 class="card-title">Intelligence</h3>
                    <p class="card-description">
                        Ideal for growing businesses and agencies who need comprehensive social media intelligence to drive strategy.
                    </p>
                    <div class="trusted-by">
                        <span class="emoji">👤</span>
                        <span>Trusted by 4,800+ businesses</span>
                    </div>
                </div>

                <div class="pricing-section">
                    <div class="price-wrapper">
                        <span class="price">$99</span>
                        <span class="period">/mo</span>
                    </div>
                    <div class="price-details">
                        <span class="original-price">$115</span>
                        <span class="savings">Save 13%</span>
                    </div>
                    <div class="revenue-info">
                        <span class="emoji">💰</span>
                        <span>Generate $2,000+ in additional revenue</span>
                    </div>
                </div>

                <button class="cta-button cta-primary">Get Early Bird Discount</button>

                <div class="guarantee">
                    <span class="emoji">🔒</span>
                    <span>90-day money-back guarantee</span>
                </div>

                <div class="features-section">
                    <p class="features-title">What's included:</p>
                    <ul class="features-list">
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Everything in Starter</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>60 days free trial (no credit card)</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>AI tutor All marketing models</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>All 6 social media platforms</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Advanced sentiment & emotion analysis</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Competitive tracking (5 competitors)</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Real-time alerts & notifications</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Custom report generation</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>API access</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Priority support</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>White-label reports</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Advanced analytics dashboards</span>
                        </li>
                    </ul>
                </div>

                <div class="card-footer">
                    Billed monthly • Cancel anytime
                </div>
            </div>

          
            <div class="pricing-card">
                <div class="card-header">
                    <h3 class="card-title">Enterprise</h3>
                    <p class="card-description">
                        Full-scale AI marketing solution for large organizations with unlimited capabilities and dedicated support.
                    </p>
                    <div class="trusted-by">
                        <span class="emoji">👤</span>
                        <span>Loved by top 100 companies</span>
                    </div>
                </div>

                <div class="pricing-section">
                    <div class="price-wrapper">
                        <span class="price">$299</span>
                        <span class="period">/mo</span>
                    </div>
                    <div class="price-details">
                        <span class="original-price">$329</span>
                        <span class="savings">Save 9%</span>
                    </div>
                    <div class="revenue-info">
                        <span class="emoji">💰</span>
                        <span>Scale to $20,000+ in revenue</span>
                    </div>
                </div>

                <button class="cta-button cta-secondary">Contact Sales</button>

                <div class="guarantee">
                    <span class="emoji">🔒</span>
                    <span>90-day money-back guarantee</span>
                </div>

                <div class="features-section">
                    <p class="features-title">What's included:</p>
                    <ul class="features-list">
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Everything in Intelligence</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>90 days free trial</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Unlimited AI copilot access</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Unlimited social platforms</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Unlimited conversations/month</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Unlimited team members</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Custom AI model training</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Advanced automation workflows</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Multi-brand management</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Dedicated account manager</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>24/7 priority support</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Custom integrations</span>
                        </li>
                        <li class="feature-item">
                            <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Advanced security & compliance</span>
                        </li>
                    </ul>
                </div>

                <div class="card-footer">
                    Billed monthly • Cancel anytime
                </div>
            </div>
        </div>
    </div>
    </section>

    <section>
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

      
        <div class="faq-header">
            <h2 class="faq-title">
                Still have <span class="highlight">questions?</span>
            </h2>
            <p class="faq-subtitle">
                Find answers to common questions about our AI-powered social media analysis platform.
            </p>
        </div>

        
        <div class="accordion">
            <button class="accordion-item" onclick="toggleAccordion(0)">
                <span>What is Dinava?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            <button class="accordion-item" onclick="toggleAccordion(1)">
                <span>How does Dinava ideally works?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            <button class="accordion-item" onclick="toggleAccordion(2)">
                <span>What kind of insignias can I get from Dinava?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            <button class="accordion-item" onclick="toggleAccordion(3)">
                <span>Which online communities does Dinava worked?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            <button class="accordion-item" onclick="toggleAccordion(4)">
                <span>Who is Dinava for?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            <button class="accordion-item" onclick="toggleAccordion(5)">
                <span>How is Dinava different from other overwheleving tools?</span>
                <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>

        
        <footer class="footer">
            <p class="footer-text">
                Better than SEO? Low code mobile apps builder platform combines a
                great user interface and reliable backend.
            </p>
            <div class="footer-links">
                <a href="#" class="footer-link">•1-2X3 Veg-web</a>
                <a href="#" class="footer-link">Struggling Indie.org</a>
            </div>
        </footer>
    </div>

    <script src="/script.js"></script>
    </section>
       
    </>
  )
}

export default App
   