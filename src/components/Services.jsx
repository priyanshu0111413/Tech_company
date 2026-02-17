
const servicesData = [
  {
    icon: "💻",
    title: "Web Development",
    desc: "Custom web applications built with modern technologies and best practices."
  },
  {
    icon: "📱",
    title: "Mobile Solutions",
    desc: "Native and cross-platform mobile apps that deliver exceptional user experiences."
  },
  {
    icon: "☁️",
    title: "Cloud Services",
    desc: "Scalable cloud infrastructure and migration services for your business."
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    desc: "Protect your business with enterprise-grade security solutions."
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Speed up your applications for better performance and SEO."
  },
  {
    icon: "👥",
    title: "IT Consulting",
    desc: "Strategic consulting to drive digital transformation."
  }
];

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Comprehensive solutions tailored to meet your business needs</p>
      </div>

      <div className="services-grid">
        {servicesData.map((item, index) => (
          <div key={index} className="service-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
