import React from 'react';
import './Header.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Header() {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Login Success:', tokenResponse);
            GetUserProfile(tokenResponse);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    const GetUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'application/json',
            }
        }).then((response) => {
            console.log('User Profile:', response.data);
            // Store user data in local storage or state
            localStorage.setItem('user', JSON.stringify(response.data));
        }).catch((error) => {
            console.error('Error fetching user profile:', error);
        });
    };

    return (
        <div className="header">
            <img src="/logo.svg" alt="Logo" />
            <div>
                <a href="/">Home</a>
                <a href="/create-trip">Create Trip</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/">WanderMind AI</a>
            </div>
            <div>
                <button onClick={() => login()}>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
