import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I am a passionate and driven Computer Science student at the University of Washington with a strong interest in software engineering and technology. I have experience working with various programming languages and frameworks, including Java, Python, React.js, and more. I am also an AWS Certified Cloud Practitioner.</p>
          <h3>Skills:</h3>
          <ul className="skills-grid">
            <li>Java, Java Swing, Java AWT</li>
            <li>Python, Flask, HTML/CSS, C++, JavaScript, React.js</li>
            <li>Spark SQL, Docker, Linux, Node.js, MongoDB/NoSQL DBs</li>
            <li>AWS Certified Cloud Practitioner</li>
          </ul>
          <h3>Education:</h3>
          <p>Bachelor of Science in Computer Science, Minor in Business Administration</p>
          <p>University of Washington, GPA – 3.82</p>
          <p>Dean’s List Scholar 2021, 2022, 2023</p>
        </div>
      </div>
    </section>
  );
}

export default About;
