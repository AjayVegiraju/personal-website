import React from 'react';

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        <div className="project" onClick={() => window.open("https://github.com/your-username/spotify-user-favorites-display", "_blank")}>
          <h3>Spotify User Favorites Display</h3>
          <p>Developed a React.js app integrating Spotify's API for personalized user data display. Ensured secure user authentication using Spotify's Authorization Code Flow with PKCE. Showcased user's profile, top songs, artists, and playlists with dynamic UI. Implemented a feature to calculate user similarity scores based on music preferences.</p>
        </div>
        <div className="project" onClick={() => window.open("https://github.com/your-username/audio-classification-and-analysis-system", "_blank")}>
          <h3>Audio Classification and Analysis System</h3>
          <p>Developed a Python program that distinguishes between music and speech in audio files, leveraging machine learning and signal processing techniques. Implemented feature extraction using Librosa to analyze audio characteristics such as Zero crossing rate, spectral centroid, and MFCCs. Trained and evaluated a Support Vector Machine model with Scikit-learn, achieving a balanced precision and recall in classifying audio files.</p>
        </div>
        <div className="project" onClick={() => window.open("https://github.com/your-username/wildfire-tracking-webapp", "_blank")}>
          <h3>Wildfire Tracking Webapp</h3>
          <p>Tracked current wildfire data using NASA's EONET API and displayed markers that represent locations on an interactive map using Google Maps open API. Utilized front-end frameworks like React.js, JavaScript, HTML/CSS to design a pleasing and interactive UI.</p>
        </div>
        <div className="project" onClick={() => window.open("https://github.com/your-username/image-comparison-and-analysis-system", "_blank")}>
          <h3>Image Comparison and Analysis System</h3>
          <p>Engineered a Java system to compare, sort, and retrieve similar images using color and intensity matrices. Utilized robust methods to accurately categorize RGB values and intensities, enhancing image analysis precision and reliability. Developed algorithms for Manhattan distance calculations, elevating image comparison accuracy. Designed an intuitive, user-centric interface for seamless image selection and detailed analytical viewing.</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
