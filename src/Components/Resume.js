import React from 'react';

 function Resume() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <a
        href="/Adhiyamaan-Resume.docx"
        download
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
