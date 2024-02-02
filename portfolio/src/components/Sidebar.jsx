import {faGoogle, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 h-screen flex flex-col items-center justify-center p-4">
            <a
                href="mailto:amirakupov@gmail.com"
                className="text-blue-500 hover:text-blue-700 mb-4"
            >
                <FontAwesomeIcon icon={faGoogle} className="h-6 w-6" />
            </a>
            <a
                href="https://github.com/amirakupov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mb-4"
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
