import React, { useRef, useLayoutEffect } from "react";
import Header from "./components/Header";
import About from "./components/About.jsx";
import gsap from "gsap";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
    const comp = useRef(null);
    const header = useRef(null);
    const welcome = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from("#welcome-section", {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(header.current, { opacity: 1, duration: 0.5 });
                    },
                });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative" ref={comp}>
            {/* Intro Slider */}
            <div
                id="intro-slider"
                className="h-screen p-10 bg-gray-50 absolute top-0 left-0 
                    font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight 
                    justify-center items-center text-center md:gap-8 md:px-16"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold" id="title-1">
                    Backend Development
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold" id="title-2">
                    API Design & Integration
                </h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold" id="title-3">
                    Scalable Systems
                </h1>
            </div>

            {/* Welcome Section */}
            <div
                id="home"
                className="h-screen flex bg-gray-950 justify-center items-center flex-col text-center px-6"
            >
                <div ref={welcome} id="welcome-section" className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Hey, I'm Amir
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-gray-300">
                        A backend & full-stack developer
                    </h2>
                    <h3 className="text-lg md:text-xl text-gray-400">
                        I build scalable systems and seamless user experiences.
                    </h3>
                </div>
            </div>

            {/* Other Sections */}
            <Header headerRef={header} />
            <About />
            <Technologies />
            <Projects />
            <Contact />
            <Sidebar />
        </div>
    );
};

export default App;

