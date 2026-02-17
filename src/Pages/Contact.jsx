import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);

    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="contact">

      {/* Header */}
      <div className="contact-header">
        <h1>Get in Touch 🤝</h1>
        <p>
          We'd love to hear from you. Fill out the form and our team will get back
          to you shortly.
        </p>
      </div>

      {/* Main Container */}
      <div className="contact-container">

        {/* Left */}
        <div className="contact-left">
          <h2>Let’s Build Something Amazing 🚀</h2>
          <p>
            Have an idea, project, or problem to solve?  
            Let’s collaborate and create impactful digital experiences.
          </p>

          <div className="contact-cards">
            <div className="info-card">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>support@popscript.com</p>
              </div>
            </div>

            <div className="info-card">
              <span>📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-card">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Chandigarh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>

            {success && (
              <p className="success-msg">Message sent successfully 🚀</p>
            )}

            <div className="input-group">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <label>Subject</label>
            </div>

            <div className="input-group">
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <label>Your Message</label>
            </div>

            <button className="submit-btn">
              Send Message 🚀
            </button>
          </form>
        </div>

      </div>

      {/* Google Map */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
          loading="lazy"
          allowFullScreen
          title="Company Location"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;
