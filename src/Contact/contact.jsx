import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Reach out to us with any questions or feedback.</p>

            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            {/* Map Section */}
            <div className="map-container">
                <h2>Our Location</h2>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.497109822!2d80.2605!3d13.0839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d5e5a06d9d%3A0x5c8b23b907a3b65b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1644821470938!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
