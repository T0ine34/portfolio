import "./index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Mail({ mail, minimal = false } : { mail: string, minimal?: boolean }) {
    return (
        <div className="link">
            <a href={"mailto:" + mail} className="mail">
                <FontAwesomeIcon icon={faEnvelope} className={"icon" + (minimal ? " large" : "")} />
                <span>{minimal ? "" : mail}</span>
            </a>
        </div>
    );
}


export default Mail;