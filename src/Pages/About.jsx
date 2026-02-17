
function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>About PopScrupt</h2>

          <p>
            Founded in 2015, TechFlow has been at the forefront of digital
            innovation, helping businesses transform their operations through
            technology.
          </p>

          <p>
            Our team of experienced professionals is committed to delivering
            exceptional results that drive growth and create lasting value for
            our clients.
          </p>

          <ul className="about-list">
            <li>Industry-leading expertise</li>
            <li>Proven track record of success</li>
            <li>Cutting-edge technology stack</li>
            <li>Dedicated support team</li>
          </ul>

          {/* Stats */}
          <div className="about-stats">
            <div>
              <h3>500+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>200+</h3>
              <span>Clients</span>
            </div>
            <div>
              <h3>50+</h3>
              <span>Experts</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
