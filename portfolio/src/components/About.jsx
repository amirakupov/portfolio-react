import React from "react";
import Work from "./Work.jsx";

function About() {
    return (
        <div className="container mx-auto max-w-screen-lg px-6 md:px-10 pt-10 pb-20" id="about">
            <section className="mb-12 about-section text-center md:text-left">
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-snug">
                    About
                </h1>
                <p className="text-lg py-6 md:py-8 lg:max-w-3xl text-content leading-relaxed">
                    I'm a FullStack Developer passionate about crafting meaningful and innovative digital experiences.
                </p>
            </section>
            <section className="mb-12 about-section text-center md:text-left">
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-snug">
                    Work Experience
                </h1>
                <div className="mt-6 space-y-6">
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
                </div>
            </section>
            <section className="about-section text-center md:text-left">
                <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-snug">
                    Education
                </h1>
                <div className="mt-6 space-y-6">
                    <Work
                        position="Bachelor's in Computer Science & Digital Communications"
                        company="FH Campus Wien"
                        location="Vienna, Austria"
                        type="Graduation"
                        duration="2022 - 2025"
                    />
                </div>
            </section>
        </div>
    );
}

export default About;