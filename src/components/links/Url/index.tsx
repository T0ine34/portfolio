import "./index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Url({ url, minimal = false } : { url: string, minimal?: boolean }) {
    let websiteName = url.split('/')[2].split('.')[0]; //like github
    if (websiteName === "www") websiteName = url.split('/')[2].split('.')[1]; //like github
    websiteName = websiteName.charAt(0).toUpperCase() + websiteName.slice(1); //like Github
    let icon = require('@fortawesome/free-brands-svg-icons')["fa" + websiteName];
    return (
        <div className="link">
            <a href={url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={icon} className={"icon" + (minimal ? " large" : "")} />
                <span>{minimal ? "" : url}</span>
            </a>
        </div>
    );
}


export default Url;