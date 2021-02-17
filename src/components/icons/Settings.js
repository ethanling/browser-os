import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog} from '@fortawesome/free-solid-svg-icons'

const Settings = ({ size }) => (
    <FontAwesomeIcon icon={faCog} size={`${size}x`} />
);

export default Settings;
