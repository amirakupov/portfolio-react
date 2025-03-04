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
                        I'm Amir, a budding Full Stack Developer passionate about crafting meaningful and innovative digital experiences. As a recent entrant into the world of web development, I bring a fresh perspective and a strong desire to learn and grow.
                    </p>
                </section>
                <section className="mb-12 about-section">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">
                        Work Experience
                    </h1>
                    <Work
                        position="Software Developer"
                        company="Erste Digital"
                        location="Vienna, Austria"
                        type="Part-time"
                        duration="April 2024 - April 2025"
                    />
                    <Work
                        position="Software Developer"
                        company="Streetrunner.at"
                        location="Vienna, Austria"
                        type="Part-time"
                        duration="June 2023 - February 2024"
                    />
                    <Work
                        position="Backend Developer"
                        company="Locaverse"
                        location="Vienna, Austria"
                        type="Part-time"
                        duration="October 2023 - November 2023"
                    />
                </section>
                <section className="about-section">
                    <h1 className="text-4xl pt-10 md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">
                        Education
                    </h1>
                    <Work
                        position="Bachelor's in Computer Science & Digital Communications"
                        company="FH Campus Wien"
                        location="Vienna, Austria"
                        type="Graduation"
                        duration="2022 - 2025"
                    />
                </section>
        </div>
    );
}

export default About;




