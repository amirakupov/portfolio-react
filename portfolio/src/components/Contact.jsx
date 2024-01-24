import React from 'react';

const Contact = () => {
    return (
        <div className="h-screen flex bg-gray-950 justify-center place-items-center flex-col text-center" id='contact'>
            <section className="mb-12 about-section">
                <h2 className="text-4xl text-gray-100 font-bold mb-6">Contact Me</h2>
            </section>
            <div className="max-w-md mx-auto">
                <div className="mb-8">
                    <p className="text-lg text-gray-100">
                        I am always open to new collaborations.
                        If you have an exciting project or job opportunity, or if you just
                        want to say hello, feel free to get in touch with me.
                    </p>
                </div>
                <div className="mb-8">
                    <p className="text-lg text-gray-100">
                        I am proficient in a variety of technologies and always eager to expand my skill set.
                        Let's work together to turn your ideas into reality.
                    </p>
                </div>
                <div>
                    <p className="text-lg text-gray-100">
                        Reach out to me via email at{' '}
                        <a href="mailto:amirakupov@gmail.com" className="text-blue-500 hover:underline">
                            amirakupov@gmail.com
                        </a>{' '}
                        or connect with me on{' '}
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            LinkedIn
                        </a>
                        . Looking forward to hearing from you!
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <p className="text-lg text-gray-100">
                    © {new Date().getFullYear()} Amir Iakupov.
                </p>
            </div>
        </div>
    )
}
export default Contact;
