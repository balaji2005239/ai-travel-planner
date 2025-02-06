import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <img src="/logo.svg" alt="" />
            <div>
                <a href="/">Home</a>
                <a href="/create-trip">Create Trip</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Header