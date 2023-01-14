import React from "react";
import Gmail from "../images/Gmail.png"
import LinkedIn from "../images/LinkedIn.png"

export default function About() {
    return (
        <div className="about">
            <p className="about--name">Laura Smith</p>
            <p className="about--title">Frontend Developer</p>
            <p className="about--website">laurasmith.website</p>
            <div className="about-buttons">
                <button>
                    <img src={Gmail} alt="Email Address"/>
                    <p>Email</p>
                </button>
                <button>
                    <img src={LinkedIn} alt="LinkedIn Link"/>
                    <p>LinkedIn</p>
                </button>
            </div>
            <p className="about--header">About</p>
            <p className="about--content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className="about--header">Interests</p>
            <p className="about--content">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}