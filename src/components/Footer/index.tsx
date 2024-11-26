import './index.scss';
import { Url, Mail } from '../links';

function Footer() {
    return (
        <footer>
            <div className='line'>
                <Url url="https://github.com/T0ine34" minimal />
                <Url url="https://www.linkedin.com/in/antoine-buirey-725195275/" minimal />
                <Mail mail="contact@antoinebuirey.fr" />
                {/* <PhoneNumber number="07 68 37 77 85" /> */}
            </div>
            <div className='line small'>
                <Url url="https://github.com/T0ine34/portfolio" minimal>sources available on github</Url>
                <p>© 2024 Antoine Buirey</p>
            </div>
        </footer>
    );
}

export default Footer;