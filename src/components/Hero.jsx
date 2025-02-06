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
                <h2 className='text1'>Unforgettable</h2>
                <div className='text-container'>
                    <h2 className='text2'>travel</h2>
                    <h2 className='text3'>Experiences</h2>
                </div>
                <div className='buttonContainer'>
                    <p>Your dedicated travel planner and curator, <br /> crafting personalized itineraries to match your preferences and budget.</p>
                    <Link to='/create-trip'>
                        <button>Create Trip</button>
                    </Link>
                </div>
            </div>
            <div className='activitiesContainer'>
                <div className='heading'>
                    <div className='textContainer'>
                        <h2 className='text4'>Plan Your trip</h2>
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
            </div>
        </div>
    );
}

export default Hero;