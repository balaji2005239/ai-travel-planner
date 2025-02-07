import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Hero.css';
import cityTourImage from '../images/citytour.jpg'; // Import the image
import museum from '../images/museum.jpg';
import beaches from '../images/beaches.jpg';
import hiking from '../images/hiking.jpg';
import cruise from '../images/cruise.jpg';
import leaf from '../images/leaf.png';

function Hero() {
    return (
        <div className='MainContainer'>
            <div className='introBody'>
                <div className="textContainer1">
                    <h1>WanderWise</h1>
                    <h3>Seamlessly Plan, Effortlessly Explore – Smart Travel, Unforgettable Adventures. </h3>
                </div>
            </div>
            <div className='activitiesContainer'>
                <div className='heading'>
                    <div className='textContainer tact'>
                        <h1 className='text5'>Let us plan you a <br /> perfect Holiday</h1>
                    </div>
                    <img src={leaf} alt="" />
                </div>
                <div className='activities'>
                    <div className='act'>
                        <img src={cityTourImage} alt="City Tour" />
                        <h3>City Tour</h3>
                    </div>
                    <div className='act'>
                        <img src={museum} alt="City Tour" />
                        <h3>Museum Tour</h3>
                    </div>
                    <div className='act'>
                        <img src={beaches} alt="City Tour" />
                        <h3>Beaches</h3>
                    </div>
                    <div className='act'>
                        <img src={hiking} alt="City Tour" />
                        <h3>Hiking</h3>
                    </div>
                    <div className='act'>
                        <img src={cruise} alt="City Tour" />
                        <h3>Cruise</h3>
                    </div>
                </div>

                <div className='sec3'>
                    <div className='wandermind'>
                        <h1>WanderMind AI 🤖</h1>
                        <h3>Unable to decide your dream location?</h3>
                        <h3>No Worries, We got your back! </h3>
                        <h3>Try our brand new AI Freature <span className='wantxt'> WanderMind AI</span></h3>
                        <button>WanderMind AI</button>
                    </div>
                    <div className='genTrip'>
                        <h1>AI TRIP PLANNER</h1>
                        <h3>Personalized Recommendations – Tailored just for you. <br />
                            🌍 Explore Hidden Gems <br />
                            ⏳ Save Time <br />
                            ✨ Start Your Journey with AI-Powered Precision! ✨
                        </h3>
                        <Link to={'/create-trip'} >
                            <button>CREATE TRIP</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;