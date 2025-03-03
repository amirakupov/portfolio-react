import { faGoogle, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
    return (
        <div className="fixed flex md:flex-col items-center justify-center p-4 
                        md:left-4 md:top-1/2 md:transform md:-translate-y-1/2
                        bottom-0 w-full md:w-auto md:space-y-6 space-x-6 md:space-x-0 py-3 bg-transparent">
            <a
                href="mailto:amirakupov@gmail.com"
                className="text-blue-500 hover:text-blue-700"
            >
                <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
            </a>
            <a
                href="https://github.com/amirakupov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
            >
                <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />
            </a>
            <a
                href="https://www.linkedin.com/in/amir-iakupov-67a943272/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
            >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>
        </div>
    );
};

export default Sidebar;

