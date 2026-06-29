import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Trusted Partner for <br />
            CLEANROOM VALIDATION,CALIBRATION &ENVIRONMENTAL MONITORING SERVICES
          </h1>
          <p className="hero-subtitle">
            Reliable,Accurate, Complaint.
          </p>
          <p>
            For Pharmaceutical,Biotechnology, Healthcare & Medical Device Industries.
          </p>
          <button className="cta-button" onClick={() => navigate('/services')}>
            Explore Services
          </button>
        </div>
      </section>

      {/* Our Promise */}
      <section className="our-promise">
        <div className="container">
          <h2>Our Promise to You</h2>
          <div className="promise-pillars">
            <div className="pillar">
              <div className="pillar-icon">👂</div>
              <h3>We Listen</h3>
              <p>We understand your needs and deliver tailored solutions.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">❤️</div>
              <h3>We Care</h3>
              <p>We prioritize quality, support, and long-term success.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">✓</div>
              <h3>We Deliver</h3>
              <p>Reliable, compliant, and innovative solutions that work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="service-boxes">
            <div className="service-box">
              <div className="service-icon">⚙️</div>
              <h3>Cleanroom Validation</h3>
            </div>
            <div className="service-box">
              <div className="service-icon">📊</div>
              <h3>Temperature Mapping</h3>
            </div>
            <div className="service-box">
              <div className="service-icon">🔬</div>
              <h3>Compressed Air Testing</h3>
            </div>
            <div className="service-box">
              <div className="service-icon">✅</div>
              <h3>Calibration Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
  <div className="container">
    <h2>Why Partner With Us?</h2>
    <div className="features-grid">
      
      <div className="feature-card">
        <h3>📋 Certified</h3>
        <p>Full compliance standards</p>
      </div>

      <div className="feature-card">
        <h3>💼 Complete Solutions</h3>
        <p>End-to-end services</p>
      </div>

      <div className="feature-card">
        <h3>✅ Reliability</h3>
        <p>Consistent and dependable service</p>
      </div>

      <div className="feature-card">
        <h3>⚡ Fast Delivery</h3>
        <p>Quick turnaround times</p>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="cta-section">
  <div className="container">
    <div>
      <h2>Ready to Partner With Us?</h2>
      <p>Let’s discuss how we can support your healthcare and monitoring needs.</p>
    </div>

    <button
      className="cta-button"
      onClick={() => navigate('/contact')}
    >
      Contact Us
    </button>
  </div>
</section>


    </div>
  )
}

export default Home