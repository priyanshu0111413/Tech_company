
const steps = [
  {
    id: 1,
    title: "Discovery & Research",
    desc: "We analyze your business needs, target audience, and competitive landscape to create a solid foundation.",
    status: "active"
  },
  {
    id: 2,
    title: "Strategy & Planning",
    desc: "Develop a comprehensive roadmap with clear milestones, timelines, and resource allocation."
  },
  {
    id: 3,
    title: "Design & Prototyping",
    desc: "Create stunning visual designs and interactive prototypes to validate the user experience."
  },
  {
    id: 4,
    title: "Development",
    desc: "Build high-performance, scalable solutions using modern technologies."
  },
  {
    id: 5,
    title: "Testing & Launch",
    desc: "Thorough testing and smooth deployment for a flawless launch."
  }
];

function Process() {
  return (
    <section className="process">
      <div className="process-header">
        <h2>Our Interactive Process</h2>
        <p>Experience our workflow step by step</p>
      </div>

      <div className="process-box">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`process-step ${step.status === "active" ? "active" : ""}`}
          >
            <div className="circle">{step.id}</div>
            <div className="content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {step.status === "active" && (
                <span className="badge">In Progress</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
