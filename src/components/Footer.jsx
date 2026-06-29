import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left - Company */}
        <div className="footer-brand">
          <h3>Daya Pharmatech</h3>
          <p>
            Advanced pharmaceutical and environmental monitoring solutions
            delivering quality, compliance, and innovation.
          </p>
        </div>

        {/* Middle - Navigation */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Right - Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: dayapharmatechservices@gmail.com</p>
          <p>Phone: +91 8500916855</p>
          <p>India</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Daya Pharmatech. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer