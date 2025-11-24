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
      <div class="carousel-container">
    <div class="carousel-track">
        <div class="carousel-slide">
            <img src="public/image/Link[relative](5).png" alt="slide1"/>
        </div>

        <div class="carousel-slide">
            <img src="public/image/Link[relative](6).png" alt="slide2"/>
        </div>
    </div>
</div>
    </section>
      
    </>
  )
}

export default App
   