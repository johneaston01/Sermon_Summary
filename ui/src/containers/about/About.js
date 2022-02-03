import React from 'react';
import '../../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* <h1>About</h1> */}
            <div className="about-text-container">
                <div className="about-text-header">Sermon Summary</div>
                <div className="about-text-line1">lets you capture the key points</div>
                <div className="about-text-line2">from a meeting and generate a summary</div>
                <div className="about-text-line3">for future reference</div>
            </div>
            <div className="about-image-container">
                <div className="about-image" />
            </div>
        </div>
        
    )
}

export default About;