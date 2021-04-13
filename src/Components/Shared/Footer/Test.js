import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Test = () => {
    return (
        <div>
            <FontAwesomeIcon className="icon active-icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
    );
};

export default Test;