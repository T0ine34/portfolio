import './index.scss';
import { Url, Mail, PhoneNumber } from '../links';

function Footer() {
    return (
        <footer>
            <Url url="https://github.com/T0ine34" minimal />
            <Url url="https://www.linkedin.com/in/antoine-buirey-725195275/" minimal />
            <Mail mail="contact@antoinebuirey.fr" />
            <PhoneNumber number="07 68 37 77 85" />
        </footer>
    );
}

export default Footer;