import React, {useEffect, useRef} from "react";
import Work from "./Work.jsx";

function About() {

    return (
        <div className="container mx-auto max-w-screen-lg pt-10 pb-20" id="about">
                <section className="mb-12 about-section">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">
                        About
                    </h1>
                    <p className="text-lg py-8 lg:max-w-3xl text-content">
                        I am a passionate individual with a strong background in web development...
                    </p>
                </section>
                <section className="mb-12 about-section">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">
                        Work Experience
                    </h1>
                    <Work
                        position="Frontend Developer"
                        company="Tech Solutions Inc."
                        location="Cityville, USA"
                        type="Full-time"
                        duration="Jan 2020 - Present"
                    />
                    <Work
                        position="UI/UX Designer"
                        company="Design Studio XYZ"
                        location="Creative City, USA"
                        type="Contract"
                        duration="May 2018 - Dec 2019"
                    />
                </section>
                <section className="about-section">
                    <h1 className="text-4xl pt-10 md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">
                        Education
                    </h1>
                    <Work
                        position="Bachelor's in Computer Science"
                        company="University of Technology"
                        location="Tech City, USA"
                        type="Graduation"
                        duration="2014 - 2018"
                    />
                </section>
        </div>
    );
}

export default About;




