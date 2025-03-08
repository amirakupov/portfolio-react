import React from "react";

const skillImages = {
    java: '/icons/4373217_java_logo_logos_icon.svg',
    spring: '/icons/icons8-spring-boot.svg',
    CSharp: '/icons/icons8-c.svg',
    kubernetes: '/icons/icons8-kubernetes.svg',
    python: '/icons/4375050_logo_python_icon.svg',
    javascript: '/icons/652581_code_command_develop_javascript_language_icon.svg',
    react: '/icons/react.svg',
    node: '/icons/8546986_node_icon.svg',
    fastAPI: '/icons/fastapi-1.svg',
    django: '/icons/9055848_bxl_django_icon.svg',
    git: '/icons/git_icon.svg',
    postgresql: '/icons/4691328_postgresql_icon.svg',
};

const Technologies = () => {
    return (
        <div className="container mx-auto max-w-screen-lg px-6 md:px-10 pt-10 pb-20" id="technologies">
            <section className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-snug">
                    Technologies
                </h2>
            </section>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center">
                {Object.keys(skillImages).map((skill) => (
                    <div key={skill} className="flex flex-col items-center">
                        <div
                            className="bg-cover bg-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg transition-transform transform hover:scale-110"
                            style={{ backgroundImage: `url(${skillImages[skill]})` }}
                        ></div>
                        <p className="mt-3 text-sm md:text-base text-gray-800 dark:text-gray-300">
                            {skill}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

