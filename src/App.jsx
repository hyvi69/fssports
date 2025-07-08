import { useState } from 'react';
import './App.css';
import logo from './assets/logobg.png';
import why2 from './assets/why2.jpg';
const moroccoFlag = "🇲🇦";
import liveIcon from './assets/icons/stream.png';
import mediaIcon from './assets/icons/media.png';
import brandIcon from './assets/icons/brand.png';
import creativeIcon from './assets/icons/creative.png';
import whatsapp from './assets/icons/whatsapp.png';
import instagram from './assets/icons/instagram.png';
import youtube from './assets/icons/youtube.png';
import facebook from './assets/icons/facebook.png';
import profile from './assets/profile.png';
import camera from './assets/icons/camera.png';
import star from './assets/icons/star.png';
import check from './assets/icons/check.png';
import vedio from './assets/icons/vedio.png';
import mob from './assets/icons/mob.png';
import str from './assets/icons/streaming.png';
import reel from './assets/icons/reels.png';
import cam from './assets/icons/cam.png';


const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};
const defaultMessage = "Hello! i want personalized pack.";
const phoneNumber = "34614752842"; // Phone number without + sign
  
const App = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('2');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToWhy = () => {
    const whySection = document.getElementById('why-section');
    if (whySection) {
      whySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToPrice = () => {
    const priceSection = document.getElementById('pricing-section');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToC = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToH = () => {
    const contactSection = document.getElementById('h');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const defaultMessage = "Hello! i want personalized pack.";
const phoneNumber = "34614752842"; // Phone number without + sign
const defaultMessage2 = "Hello!  can i know more informations about full pack and price .";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  };
const handleClick2 = () => {
    const encodedMessage2 = encodeURIComponent(defaultMessage2);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage2}`, '_blank');
  };

  const featuresList = [
    'Single Event Coverage',
    'Basic Highlights',
    'Photo Gallery',
    'Multi-angle Video',
    'Live Streaming',
    'Post-production',
    'Brand Consultation',
  ];

  return (
    <div id='h' className="app-container">
      <div className="welcome-page">
        <header className="header">
          <nav>
            <li>
              <Card>
                <img src={logo} alt="Logo" className="nav-logo" />
              </Card>
            </li>

            <ul className="nav-links">
              <li>
                <Card>
                  <button className="nav-button" onClick={handleScrollToH}>Home</button>
                </Card>
              </li>
              <li>
                <Card>
                  <button className="nav-button" onClick={handleScrollToAbout}>About</button>
                </Card>
              </li>
              <li>
                <Card>
                  <button className="nav-button" onClick={handleScrollToWhy}>Why</button>
                </Card>
              </li>

              <li>
                <Card>
                  <button className="nav-button" onClick={handleScrollToPrice}>Price</button>
                </Card>
              </li>
              <li>
                <Card>
                  <button className="nav-button" onClick={handleScrollToC}>Contact</button>
                </Card>
              </li>
            </ul>
          </nav>
        </header>
        
         

        <div id="content" className="content">
         
        <h1 className="hero-title">Where Every Match Tells a Story</h1>
        <p className="hero-subtitle">
          Experience the thrill of padel like never before. Join our community of passionate players and discover your next chapter on the court.
        </p>
        <button className="cta-button">Start Your Journey</button>
     

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div style={{ fontSize: '12px', marginBottom: '5px' }}>SCROLL DOWN</div>
        <div style={{ fontSize: '20px' }}>↓</div>
      </div>
    </div>
        
      </div>
      <div id="about-section" className="about-section">
        <div id="2" class="image-card">
<div className="header-section">
  
        <h1  className="main-title">
          <span className="title-gold">The Story Of</span><br />
          <span className="title-white">Our Business</span> <span className="title-gold">Journey</span>
        </h1>
</div>
        <div className="live-widget">
          <div className="live-header">
            <div className="live-dot"></div>
            <div className="live-text">LIVE</div>
          </div>
          <div className="play-button">
            <div className="play-icon"></div>
          </div>
          <div className="audio-bars">
            {[10, 20, 15, 25, 12, 18, 22, 8, 16, 20,13,17,20,1,20, 15, 25, 12,].map((h, i) => (
              <div
                className="bar"
                key={i}
                style={{ animationDelay: `${i * 0.1}s`, height: `${h}px` }}
              ></div>
            ))}
          </div>
        </div>


      <div className="content-grid">
        <div className="content-card">
          <h2 className="card-title">Vision</h2>
          <div className="card-content">
            {[
              ['🎬', 'Redefining Sports Media Excellence in Morocco'],
              ['⭐', 'Empowering Sports Through Creative Storytelling'],
              ['✓', 'Delivering Unmatched Professionalism at Every Level'],
            ].map(([icon, text], i) => (
              <div className="feature-item" key={i}>
                <div className="feature-icon">{icon}</div>
                <div className="feature-text">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card">
          <h2 className="card-title">About Us</h2>
          <div className="card-content">
            <p className="about-text">
              <span className="highlight">FS SPORTS</span> is Morocco's{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="flag-icons-ma"
            viewBox="0 0 512 512"
            style={{
              width: '1.4em',
              height: '0.8em',
              verticalAlign: 'middle',
              marginLeft: '0.15em',
              marginRight: '0.15em',
            }}
            aria-label="Flag of Morocco"
            role="img"
          >
            <path fill="#c1272d" d="M512 0H0v512h512z" />
            <path
              fill="none"
              stroke="#006233"
              strokeWidth="12.5"
              d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
            />
          </svg>{' '} 🇲🇦 leading sports media production company, specializing in high-end photography, videography, and live broadcasting.
            </p>
            <p className="about-text">
              We are the first in Morocco 🇲🇦 to professionally live stream padel matches, setting a new standard for how sports are experienced and shared.
            </p>
            <p className="about-text">
              With a blend of technical skill, creative vision, and passion, we help athletes, clubs, and events shine because at <span className="highlight">FS SPORTS</span>, we don't just capture the game — we <span className="highlight">amplify</span> it!
            </p>
          </div>
        </div>

        <div className="content-card">
          <h2 className="card-title">Mission</h2>
          <div className="card-content">
            {[
              ['📸', 'Professional sports photography'],
              ['🎥', 'Multi-angle HD/4K video coverage'],
              ['📱', 'Social-Ready Short-form content (reels, stories)'],
              ['📡', 'High-performance live streaming of matches and tournaments'],
              ['💾', 'Post-production and media archiving'],
            ].map(([icon, text], i) => (
              <div className="feature-item" key={i}>
                <div className="feature-icon">{icon}</div>
                <div className="feature-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
     </div>
 </div>


        
        



    
   





















      
      

      <div id="why-section" className="why-section">
  <div className="header-section2">
    <h1 className="main-title">WHY FS sports</h1>
    <p className="subtitle">Make Your Mark In the Sports Arena</p>

    <div className="why-layout">
      {/* Left Column: Equipment Icons */}
      <div className="equipment-icons">
        <div className="equipment-icon" title="Professional Photography">📷</div>
        <div className="equipment-icon" title="Video Production">🎥</div>
        <div className="equipment-icon" title="Live Streaming">💻</div>
        <div className="equipment-icon" title="Multi-Camera Setup">📹</div>
        <div className="equipment-icon" title="Post-Production">🎬</div>
      </div>

      {/* Center Column: Image */}
      <div className="padel-image-container">
        <img src={why2} alt="Padel Coverage" className="padel-image" />
      </div>

      {/* Right Column: Feature List */}
      <div className="why-text">
        <ul>
          <li>
            <div className="why-title">
              <img src={liveIcon} alt="Live Streaming" className="why-icon" />
              <strong>Pioneers in Live Streaming</strong>
            </div>
            <p>
              First in Morocco to offer professional live broadcasting of padel matches —
              real-time, reliable, and high quality.
            </p>
          </li>

          <li>
            <div className="why-title">
              <img src={mediaIcon} alt="Media Powerhouse" className="why-icon" />
              <strong>All-in-One Media Powerhouse</strong>
            </div>
            <p>
              From 4K multi-angle coverage to content made for Reels and Stories, we've got
              your event covered end-to-end.
            </p>
          </li>

          <li>
            <div className="why-title">
              <img src={brandIcon} alt="Brand Visibility" className="why-icon" />
              <strong>Elevate Your Brand</strong>
            </div>
            <p>
              We help athletes, clubs, and organizers increase visibility and audience
              engagement through high-impact storytelling.
            </p>
          </li>

          <li>
            <div className="why-title">
              <img src={creativeIcon} alt="Creative Team" className="why-icon" />
              <strong>Creative. Reliable. Professional.</strong>
            </div>
            <p>
              Our passionate team combines technical skill and artistic flair to deliver media
              that truly represents the energy of sport.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>








      {/* Pricing Section */}
      <div  className="pricing-section">


<main id="pricing-section" className="pricing-container">
        <section className="pricing-intro">
          <h1 >Choose Your Plan</h1>
          <p >
            Flexible coverage options tailored for your events and budget. Experience premium
            sports broadcasting with our professional packages.
          </p>
        </section>

        <div className="plans-grid">
          <div className="plan-card">
            <div className="plan-header">
              <h3>Personalized Pack</h3>
              <div className="plan-price">Custom <span>/ event</span></div>
            </div>
            <ul className="plan-features">
              <li>Single Event Coverage</li>
              <li>Basic Highlights</li>
              <li>Photo Gallery</li>
              <li>Multi-Angle Video</li>
              <li>Live Streaming</li>
              <li>Post-Production</li>
            </ul>
            <button className="plan-button secondary-btn" onClick={handleClick} >Get Quote</button>
          </div>

          <div className="plan-card popular-plan">

            <div className="plan-header">
              <h3>Full Coverage Pack</h3>
              <div className="plan-price"> <span> Most Popular</span></div>
            </div>
            <ul className="plan-features">
              <li>Full Coverage</li>
              <li>4K Multi-Angle Video</li>
              <li>Live Streaming + Highlights</li>
              <li>Professional Commentary</li>
              <li>Social Media Content</li>
              <li>Analytics Dashboard</li>
              <li>Priority Support</li>
            </ul>
            <button className="plan-button" onClick={handleClick2}        >
          Start </button>
          </div>
        </div>
      </main>

  </div>




  

      
 

<div id="contact-section" className="contact-section">
  <div className="contact-wrapper">
    <h2>Get In Touch</h2>
    <p>Reach out anytime!</p>
    <div className="social-icons">
    <a href="https://wa.me/message/2B37VOFVTCYZF1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="icon whatsapp">
        <img src={whatsapp} alt="WhatsApp" style={{ width: '40px', height: '40px' }} />
      </a>
      <a href="https://www.instagram.com/fs.sports.padel?igsh=MTZwcDZ1YzFkaGtwbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon instagram">
        <img src={instagram} alt="Instagram" style={{ width: '40px', height: '40px' }} />
      </a>
      <a href="https://www.facebook.com/share/16dk169Py5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon facebook">
        <img src={facebook} alt="Facebook" style={{ width: '40px', height: '40px' }} />
      </a>
      <a href="https://youtube.com/@fs-sports433?si=H6MFKqM7_avDNRjp" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="icon youtube">
        <img src={youtube} alt="YouTube" style={{ width: '40px', height: '40px' }} />
      </a>
     
    </div>
  </div>
</div>




<footer className="footer">
  <p>© {new Date().getFullYear()} FS Sports. All rights reserved.</p>
</footer>





    </div>
    
  );
};

export default App;
