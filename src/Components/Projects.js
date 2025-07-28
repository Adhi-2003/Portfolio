import React from 'react';

const projects = [
  {
    title: "Online Course Portal",
    tech: "Django, HTML, CSS, SQLite",
    desc: "Platform for students to enroll in courses with login/logout and enrollment system."
  },
  {
    title: "BMI Calculator",
    tech: "React.js, JavaScript, CSS",
    desc: "A clean and mobile-friendly BMI calculator with real-time output."
  },
  {
    title: "Real-Time Chat App",
    tech: "React.js, Node.js, Socket.io",
    desc: "Group chat app with typing indicators and WebSocket backend."
  }
];

function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="italic">{project.tech}</p>
          <p>{project.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
