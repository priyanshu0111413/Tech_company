import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/CompanyVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Center Content */}
      <div className="hero-content center">
        <h1>Empowering Businesses with AI-Driven, Transformative Solutions</h1>

        <p>
          We help companies leverage cutting-edge technology to achieve their
          goals and stay ahead of the competition.
        </p>

        <div className="hero-buttons">
          {/* Contact Page */}
          <button
            className="btn primary"
            onClick={() => navigate("/contact")}
          >
            Get Started →
          </button>

          {/* Services Page */}
          <button
            className="btn secondary"
            onClick={() => navigate("/services")}
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
