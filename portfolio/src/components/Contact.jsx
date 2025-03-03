import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen flex bg-gray-950 justify-center items-center flex-col text-center px-6" id="contact">
            <section className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6">
                    Contact Me
                </h2>
            </section>

            {/* Contact Information */}
            <div className="max-w-lg mx-auto">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                    I am always open to new collaborations. If you have an exciting project, job opportunity, 
                    or just want to say hello, feel free to reach out.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    You can contact me via email at{" "}
                    <a href="mailto:amirakupov@gmail.com" className="text-blue-400 hover:text-blue-500 transition">
                        amirakupov@gmail.com
                    </a>
                    {" "}or connect with me on{" "}
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition"
                    >
                        LinkedIn
                    </a>.
                    Looking forward to hearing from you!
                </p>
            </div>

            {/* Footer */}
            <div className="mt-10">
                <p className="text-sm md:text-base text-gray-400">
                    © {new Date().getFullYear()} Amir Iakupov.
                </p>
            </div>
        </div>
    );
};

export default Contact;

