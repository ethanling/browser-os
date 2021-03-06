import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'

const About = ({ size }) => (
    <FontAwesomeIcon icon={faUserCircle} size={`${size}x`} />
);

export default About;
