import React from "react";
import Twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import GitHub from "../images/GitHub.png"

export default function Footer() {
    return (
        <div className="footer">
            <img src={Twitter} alt="Social Link" className="socialmedia--logo"/>
            <img src={Facebook} alt="Social Link" className="socialmedia--logo"/>
            <img src={Instagram} alt="Social Link" className="socialmedia--logo"/>
            <img src={GitHub} alt="Social Link" className="socialmedia--logo"/>
        </div>
    )
}