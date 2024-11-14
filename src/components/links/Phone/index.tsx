import "./index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function PhoneNumber({ number, minimal = false } : { number: string, minimal?: boolean }) {
    return (
        <div className="link">
            <a href={"tel:" + number} className="phone">
                <FontAwesomeIcon icon={faPhone} className={"icon" + (minimal ? " large" : "")} />
                <span>{minimal ? "" : number}</span>
            </a>
        </div>
    );
}


export default PhoneNumber;