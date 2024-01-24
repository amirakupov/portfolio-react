import React from "react";


const skillImages = {
    python: '/icons/4375050_logo_python_icon.svg',
    javascript: '/icons/652581_code_command_develop_javascript_language_icon.svg',
    java: '/icons/4373217_java_logo_logos_icon.svg',
    html: '/icons/317755_badge_html_html5_achievement_award_icon.svg',
    css: '/icons/317756_badge_css_css3_achievement_award_icon.svg',
    react: '/icons/react.svg',
    node: '/icons/8546986_node_icon.svg',
    fastAPI: '/icons/fastapi-1.svg',
    django: '/icons/9055848_bxl_django_icon.svg',
    flask: '/icons/icons8-flask.svg',
    postgresql: '/icons/4691328_postgresql_icon.svg',
    // sqlalchemy: 'url-to-sqlalchemy-image',
    tailwind: '/icons/9074204_tailwind_icon.svg',
    bootstrap: '/icons/8546808_bootstrap_icon.svg',
    // webStorm: 'url-to-webStorm-image',
    // pycharm: 'url-to-pycharm-image',
    // vscode: 'url-to-vscode-image',
    git: '/icons/git_icon.svg',
    github: '/icons/github_icon.svg',
    npm: '/icons/8666417_npm_icon.svg',
};
const Technologies = () => {
    return (
        <div className="container mx-auto max-w-screen-lg pt-10 pb-20">
            <section className="mb-12 about-section">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark-heading dark:text-light-heading leading-tight">Technologies</h2>
            </section>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.keys(skillImages).map((skill) => (
                        <div key={skill} className="flex flex-col items-center">
                            <div
                                className="bg-cover bg-center w-24 h-24 rounded-full"
                                style={{ backgroundImage: `url(${skillImages[skill]})` }}
                            ></div>
                            <p className="text-white mt-2">{skill}</p>
                        </div>
                    ))}
                </div>

        </div>
    );
};

export default Technologies;
