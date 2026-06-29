import './Services.css'

const Services = () => {
  return (
    <div className="services">
      {/* <section className="services-hero">
        <div>
          <h1>Cleanroom Validation, Calibration & Environmental Monitoring Services</h1>
          <p>Trusted Partner for Reliable, Accurate, Compliant Solutions</p>
        </div>
      </section> */}

      <section className="services-container">
        <div className="container">
          <div className="services-intro">
            <p>
              <strong>Reliable. Accurate. Compliant.</strong> We deliver comprehensive cleanroom validation, calibration, and environmental monitoring services for Pharmaceutical, Biotechnology, Healthcare & Medical Device Industries. Our advanced instruments and experienced professionals ensure your facilities meet the highest regulatory standards including ISO and EU GMP compliance.
            </p>
          </div>
          <div className="service-cards-grid">
            <div className="service-card-full">
              <div className="service-icon">💨</div>
              <h3>Air Velocity Test</h3>
              <p>Precise measurement and verification of cleanroom air flow patterns and velocity.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🔍</div>
              <h3>Filter Integrity Test</h3>
              <p>Comprehensive HEPA/ULPA filter integrity testing to ensure optimal contamination control.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">✓</div>
              <h3>Particle Count Test</h3>
              <p>Advanced particle counting and monitoring for environmental classification verification.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🧪</div>
              <h3>Recovery Test</h3>
              <p>Recovery rate testing to validate cleanroom performance and recovery capabilities.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🌀</div>
              <h3>AirFlow Visualization Study</h3>
              <p>Flow visualization studies to identify potential contamination pathways and optimize design.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🌡️</div>
              <h3>Temperature Mapping</h3>
              <p>Detailed temperature distribution mapping and validation across critical manufacturing areas.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🧬</div>
              <h3>Autoclave Mapping</h3>
              <p>Sterilization validation and autoclave performance mapping for pharmaceutical equipment.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">🔥</div>
              <h3>Tray Dryer Mapping</h3>
              <p>Temperature and humidity mapping for tray dryers and drying processes validation.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">⚙️</div>
              <h3>Calibration Services</h3>
              <p>Comprehensive calibration services for all laboratory and manufacturing instruments.</p>
            </div>
            <div className="service-card-full">
              <div className="service-icon">💨</div>
              <h3>Compressed Air Testing</h3>
              <p>Testing and monitoring of compressed air systems for pharmaceutical grade compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="container">
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-item">
              <div className="industry-icon">💊</div>
              <p>Pharmaceutical Industries</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🧬</div>
              <p>Biotechnology Industries</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏥</div>
              <p>Hospitals</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">⚕️</div>
              <p>Medical Device Industries</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🔬</div>
              <p>Research Laboratories</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏭</div>
              <p>Cleanroom Facilities</p>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🍔</div>
              <p>Food & Beverage Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pricing-section">
        <div className="container">
          <h2 className="pricing-title">Service Packages</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h4>Validation Services</h4>
              <div className="pricing-amount">Custom</div>
              <p className="pricing-duration">Per requirement</p>
              <ul className="pricing-features">
                <li>Cleanroom validation</li>
                <li>Environmental monitoring</li>
                <li>Mapping studies</li>
                <li>Compliance reports</li>
              </ul>
              <button className="pricing-button">Request Quote</button>
            </div>
            <div className="pricing-card featured">
              <h4>Complete Solutions</h4>
              <div className="pricing-amount">Custom</div>
              <p className="pricing-duration">Most popular</p>
              <ul className="pricing-features">
                <li>Full validation package</li>
                <li>Calibration services</li>
                <li>Ongoing monitoring</li>
                <li>Regulatory documentation</li>
                <li>Expert consultation</li>
              </ul>
              <button className="pricing-button">Contact Us</button>
            </div>
            <div className="pricing-card">
              <h4>Periodic Services</h4>
              <div className="pricing-amount">Custom</div>
              <p className="pricing-duration">Annual/Quarterly</p>
              <ul className="pricing-features">
                <li>Routine monitoring</li>
                <li>Re-validation services</li>
                <li>Compliance audits</li>
                <li>Priority support</li>
              </ul>
              <button className="pricing-button">Get Started</button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Services
