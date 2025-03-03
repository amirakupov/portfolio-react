import React from 'react';

const projectsList = [
    {
        id: 1,
        name: 'Streetrunner.at',
        description:
            'A delivery service for drinks and snacks in Vienna. Includes robust admin and staff management features. ' +
            'Technologies: Django, JavaScript, CSS, HTML, PostgreSQL.',
        gif: '/gifs/streetrunner.gif',
        link: 'https://streetrunner.at',
    },
    {
        id: 2,
        name: 'Accontable',
        description:
            'A financial tracking system for managing expenses and revenue with visual reports. ' +
            'Technologies: FastAPI, React.js, CSS, HTML, SQLAlchemy.',
        gif: '/gifs/Acoontable_vid.gif',
        github: 'https://github.com/amirakupov/BudgetPlannerFE.git',
        link: 'https://github.com/bjugoy/budgetPlannerBE.git',
    },
    {
        id: 3,
        name: 'Microservice',
        description: 'Coming soon...',
        github: 'https://github.com/KukeiAMG/VBartere',
        link: 'https://example.com/project2',
    },
];

const Projects = () => {
    return (
        <div className="container mx-auto max-w-screen-lg px-6 md:px-10 pt-10 pb-20" id="projects">
            <section className="mb-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-snug">
                    Projects
                </h2>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                        {project.gif && (
                            <img
                                src={project.gif}
                                alt={`${project.name} GIF`}
                                className="w-full h-auto rounded-lg shadow-md mb-4 object-cover"
                            />
                        )}

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                            >
                                View Project
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;


