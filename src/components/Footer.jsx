import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Description */}
        <div className="footer-col">
          <h2 className="footer-logo">PopScrupt</h2>
          <p>
            Transforming businesses through innovative technology solutions.
          </p>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Services</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PopScrupt. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

