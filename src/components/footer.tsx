import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './footer.css';
export const FooterComponent = () => (
    <footer>
        <div className="redes-sociais">
            <p>Marcos Guilherme</p>
            <a href="https://github.com/marguilherme" className="item-rede-social">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/marcos-guilherme-yurasseck-sassaki/" className="item-rede-social">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
    </footer>
)