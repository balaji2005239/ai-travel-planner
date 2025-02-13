import React, { useEffect, useState } from 'react';
import './createTrip.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelersList } from '../constants/options';
import { chatSession } from '../service/AIModal';
import { useGoogleLogin } from '@react-oauth/google';

function CreateTrip() {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState({});
    const [selectedBudget, setSelectedBudget] = useState(null);
    const [selectedTraveler, setSelectedTraveler] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);



    const onGenerateTrip = async () => {
        const user = localStorage.getItem('user');

        if (!user) {
            setOpenDialog(true);
            alert("Please login to continue");
            return
        }

        if (!formData?.location || !formData?.noofDays || !formData?.budget || !formData?.traveller) {
            alert("Please fill all the fields");
            return;
        }
        const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location?.label).replace("{totalDays}", formData?.noofDays).replace("{traveller}", formData?.traveller).replace("{budget}", formData?.budget);

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);

        console.log(result.response.text());
    }

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
                                    handleInputChange('location', v);
                                },
                            }}
                        />
                    </div>

                    <div className="dayContainer">
                        <h2>What are your travel dates?</h2>
                        <input
                            type="number"
                            placeholder="Ex. 4"
                            aria-label="Number of travel days"
                            onChange={(e) => handleInputChange('noofDays', e.target.value)}
                        />
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
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelectedBudget(item.title);
                                            handleInputChange('budget', item.title);
                                        }}
                                        className={`budgetCard ${selectedBudget === item.title ? 'selectedCard' : ''}`}
                                    >
                                        <h2>{item.icon}</h2>
                                        <h2>{item.title}</h2>
                                        <p className="desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="people">
                            <h2>Who is your travel buddy for your next adventure?</h2>
                            <div className="peopleContainer">
                                {SelectTravelersList.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelectedTraveler(item.people);
                                            handleInputChange('traveller', item.people);
                                        }}
                                        className={`peopleCard ${selectedTraveler === item.people ? 'selectedCard' : ''}`}
                                    >
                                        <h2>{item.icon}</h2>
                                        <h2>{item.title}</h2>
                                        <p className="desc">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={onGenerateTrip}>Generate Trip</button>
            </div>
        </div>
    );
}

export default CreateTrip;
