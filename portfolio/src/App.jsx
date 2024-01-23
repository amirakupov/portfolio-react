import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Header from "./components/Header";
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
                .from("#welcome", {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(header.current, { opacity: 1, duration: 0.5 });
                        gsap.to(welcome.current, { opacity: 0, duration: 0.5 });
                    },
                });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative" ref={comp}>
            <div
                id="intro-slider"
                className="h-screen p-10 bg-gray-50 absolute top-0 left-0
                    font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
            >
                <h1 className="text-9xl" id="title-1">
                    Professional
                </h1>
                <h1 className="text-9xl" id="title-2">
                    Snus
                </h1>
                <h1 className="text-9xl" id="title-3">
                    Eater
                </h1>
            </div>
            <div className="h-screen flex bg-gray-950 justify-center place-items-center">
                <h1 ref={welcome} className="text-9xl font-bold text-gray-100" id="welcome">
                    здорова
                </h1>
            </div>
            <Header headerRef={header} />
        </div>
    );
};

export default App;
