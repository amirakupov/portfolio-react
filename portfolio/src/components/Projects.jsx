import React from 'react';

const projectsList = [
    {
        id: 1,
        name: 'Streetrunner.at',
        description: 'проект разаработан для доставки напитков и снеков в вене. включает в себя чики брики пальчик выкень.' +
            'technologies: django, js, css, html, postgres',
        gif: '/gifs/streetrunner.gif',
        link: 'https://streetrunner.at',
        github: 'https://github.com',
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description of Project 2',
        github: 'https://github.com',
        link: 'https://example.com/project2',
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description of Project 3',
        github: 'https://github.com',
        link: 'https://example.com/project2',
    },
];

const Projects = () => {
    return (

        <div className="container mx-auto max-w-screen-lg pt-10 pb-20" id='projects'>
              <section className="mb-12 about-section">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">Projects</h2>
              </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsList.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        {project.gif && (
                            <img
                                src={project.gif}
                                alt={`${project.name} GIF`}
                                className="mb-4 rounded-lg shadow-md"
                            />
                        )}
                        <div className="flex items-center">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mr-4"
                            >
                                View Project
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:underline"
                                >
                                    View Code on GitHub
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


