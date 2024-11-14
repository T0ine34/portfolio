import "./index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Url({ url } : { url: string }) { //like https://github.com/T0ine34
    let baseUrl = url.split('/')[2]; //like github.com
    let websiteName = baseUrl.split('.')[0]; //like github
    websiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1); //like Github
    let iconName = "fa" + websiteName;
    let icon = require('@fortawesome/free-brands-svg-icons')[iconName];
    return (
        <div className="url">
            <a href={url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} />
                <span>{baseUrl}</span>
            </a>
        </div>
    );
}


export default Url;