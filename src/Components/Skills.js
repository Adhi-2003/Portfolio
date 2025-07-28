// src/components/Skills.jsx
import React from 'react';

const skills = {
  Languages: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
  Frameworks: ["Django", "Flask", "React.js", "Bootstrap"],
  Databases: ["PostgreSQL", "MySQL", "SQLite"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Docker (Basics)"],
  Concepts: ["REST APIs", "CRUD", "MVC", "JSON", "AJAX"]
};

 function Skills() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-semibold">{category}</h3>
          <ul className="list-disc ml-6">
            {items.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
