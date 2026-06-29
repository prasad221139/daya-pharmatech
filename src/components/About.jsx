import './About.css'

const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <div>
          <h1>About Daya Pharmatech</h1>
          <p>Driving pharmaceutical innovation with quality & compliance</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-content">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, Daya Pharmatech has grown into a trusted pharmaceutical partner,
            delivering high-quality contract development and monitoring solutions.
          </p>
          <p>
            With advanced infrastructure and experienced professionals, we support  clients
            with reliable, compliant, and scalable pharmaceutical services.
          </p>
        </div>
      </section>

      {/* STATS (NEW - Premium) */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div>
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3>20+</h3>
              <p>Projects Delivered</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Compliance Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM (SIMPLIFIED PREMIUM) */}
      <section className="team-section">
        <div className="container">
          <h2>Leadership Team</h2>

          <div className="team-grid">
            <div className="team-card">
              <h3>N. Annamani</h3>
              <p>Proprietor</p>
            </div>

            <div className="team-card">
              <h3>N. Malathi</h3>
              <p>Co-Proprietor</p>
            </div>

            {/* <div className="team-card">
              <h3>Vikram Patel</h3>
              <p>Manufacturing Director</p>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About