import React from "react";

function Work({ position, company, location, type, duration }) {
    return (
        <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
            {/* Position & Type */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h1 className="text-content text-base sm:text-lg lg:text-xl">{position}</h1>
                <div className="btn bg-greenbg text-green-text text-xs sm:text-sm inline-block rounded-3xl px-3 py-1 mt-2 sm:mt-0">
                    {type}
                </div>
            </div>

            {/* Company, Location & Duration */}
            <div className="flex flex-col sm:flex-row sm:justify-between pt-2">
                <div className="flex flex-col sm:flex-row sm:space-x-3">
                    <p className="text-content text-xs sm:text-sm font-light">{company}</p>
                    <p className="text-content text-xs sm:text-sm font-light">{location}</p>
                </div>
                <p className="text-content text-xs sm:text-sm font-light min-w-0 break-words mt-2 sm:mt-0">
                    {duration}
                </p>
            </div>
        </article>
    );
}

export default Work;

