import React from "react";
import BoardCard from "./board";
import "./about.css";

const boardMembers = [
    {
        "Name":"Thanga Akilan",
        "Posting":"posting1",
        "imgsrc":"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        "gitSrc":"https://github.com/TyroAurum/myPythonProjects/blob/main/README.md"},
    {
        "Name":"Dharmaseelan",
        "Posting":"posting2",
        "imgsrc":"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        "gitSrc":""},
       
    
]

const About = () => {
    return(
        <div className="aboutPage">
            <h2>About us</h2>
            <p>Velammal Students Club is a club functioning under the Velammal Engineering Institutions.
                The Club aims to bring together the students of all the Velammal Colleges to bring out the talents and also encourage students to 
                grow their talents.</p>
            <h2>Board boardMembers</h2>
            <div className="containerbox">
                {boardMembers.map((boardMember) => (<BoardCard member={boardMember}/>) )}
            </div>
        </div>
    );
}

export default About;