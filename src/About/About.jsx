import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1>About WanderWise</h1>
            <p>
                Welcome to <span className="highlight">WanderWise</span>, your ultimate travel planner!
                We help travelers create seamless itineraries, discover new destinations, and
                make the most out of their journeys.
            </p>

            <div className="about-section">
                <h2>Why Choose Us?</h2>
                <ul className="features-list">
                    <li>🌍 Discover breathtaking destinations with expert recommendations</li>
                    <li>📅 Plan your itinerary with a user-friendly interface</li>
                    <li>💰 Get budget-friendly travel suggestions</li>
                    <li>🚀 Personalized trip planning for solo travelers, families, and groups</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                    At WanderWise, we aim to make travel planning <strong>stress-free</strong> and <strong>enjoyable</strong>.
                    Whether you're an adventure seeker or a leisure traveler, we provide you with the
                    best insights and tools to explore the world with confidence.
                </p>
            </div>
        </div>
    );
};

export default About;