import React, { useState } from 'react';
import './createTrip.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SelectBudgetOptions, SelectTravelersList } from '../constants/options';

function CreateTrip() {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([]);

    return (
        <div className="Container">
            <div className="contentContainer">
                <div className="textContainer">
                    <h2>Tell us your travel preferences</h2>
                    <p>
                        Share a few key details, and our trip planner will design a
                        personalized itinerary packed with experiences tailored to your
                        unique preferences!
                    </p>
                </div>

                <div className="formContainer">
                    <div className="inputContainer">
                        <h2>What is your dream destination?</h2>
                        <GooglePlacesAutocomplete
                            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                            selectProps={{
                                place,
                                onChange: (v) => {
                                    setPlace(v);
                                    console.log(v);
                                },
                            }}
                        />
                    </div>

                    <div className="dayContainer">
                        <h2>What are your travel dates?</h2>
                        <input type="number" placeholder="Ex. 4" aria-label="Number of travel days" />
                    </div>

                    <div>
                        <div className="budget">
                            <h2>What is your budget?</h2>
                            <p>
                                Ready to make your dream getaway a reality? Let’s set your budget and
                                start planning!
                            </p>
                            <div className="budgetContainer">
                                {SelectBudgetOptions.map((item, index) => (
                                    <div key={index} className="budgetCard">
                                        <h2>{item.icon}</h2>
                                        <h2>{item.title}</h2>
                                        <p className="desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="people">
                                <h2>Who is your travel buddy for your next adventure?</h2>
                                <div className="peopleContainer">
                                    {SelectTravelersList.map((item, index) => (
                                        <div key={index} className="peopleCard">
                                            <h2>{item.icon}</h2>
                                            <h2>{item.title}</h2>
                                            <p className="desc">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button>Generate Trip</button>
            </div>
        </div>
    );
}

export default CreateTrip;
