import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="intro">
        <img src="profile.jpg" alt="Profile" className="profile-image" />
        <h1>Welcome to My Personal Website</h1>
        <p>Hi, I'm Ajay Vegiraju. I'm a Computer Science student at the University of Washington with a minor in Business Administration.</p>
        <p>I am passionate about software engineering and technology. Explore my projects, read my blog, or get in touch with me!</p>
        <div className="home-buttons">
          <a href="/portfolio" className="btn">View My Work</a>
          <a href="/contact" className="btn">Get in Touch</a>
        </div>
      </div>

      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project">
          <h3>Spotify User Favorites Display</h3>
          <p>A React.js app integrating Spotify's API for personalized user data display.</p>
          <a href="https://github.com/your-username/spotify-user-favorites-display" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        <div className="project">
          <h3>Wildfire Tracking Webapp</h3>
          <p>Tracked current wildfire data using NASA's EONET API and Google Maps API.</p>
          <a href="https://github.com/your-username/wildfire-tracking-webapp" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>

      <div className="testimonials">
        <h2>What People Are Saying</h2>
        <blockquote>
          <p>"Ajay is a highly skilled and dedicated individual. His work on our project was exceptional."</p>
          <footer>- John Doe, Software Engineer</footer>
        </blockquote>
        <blockquote>
          <p>"A talented developer with a keen eye for detail and a passion for technology."</p>
          <footer>- Jane Smith, Project Manager</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default Home;