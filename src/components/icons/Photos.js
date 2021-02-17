import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage} from '@fortawesome/free-solid-svg-icons'

const Photos = ({ size }) => (
    <FontAwesomeIcon icon={faImage} size={`${size}x`} />
);

export default Photos;
