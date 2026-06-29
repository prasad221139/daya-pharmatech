import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">

      {/* Hero */}
      <section className="contact-hero">
        <div>
          <h1>Contact Us</h1>
          <p>Connect with our team for reliable pharmaceutical solutions</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-content">
        <div className="contact-wrapper">

          {/* Left Info */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="contact-info-item">
              <span>📍</span>
              <div>
                <h3>Head Office</h3>
                <p>Hyderabad,Telangana, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>📧</span>
              <div>
                <h3>Email</h3>
                <p>dayapharmatechservices@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 8500916855</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span>🕐</span>
              <div>
                <h3>Working Hours</h3>
                <p>Mon – Sat : 9 AM – 6 PM</p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="contact-card">
              <h3>Business Enquiry?</h3>
              <p>Our team will respond within 24 hours</p>

              <div className="contact-actions">
                <a href="mailto:dayapharmatechservices@gmail.com">Email Us</a>
                <a href="tel:+918500916855">Call Now</a>
              </div>
            </div>
          </div>

          {/* Right Visual / Highlight */}
          <div className="contact-highlight">
            <h2>Why Contact Us?</h2>
            <ul>
              <li>✔ Industry-expert consultation</li>
              <li>✔ Fast response time</li>
              <li>✔ Regulatory compliant solutions</li>
              <li>✔ Tailored services for your needs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Our Location</h2>
        <iframe
          className="map-frame"
          src="https://www.google.com/maps?q=Hyderabad&Telangana&output=embed"
          loading="lazy"
        />
      </section>

    </div>
  )
}

export default Contact