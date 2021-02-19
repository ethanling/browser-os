import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

const Spotify = ({ size }) => (
    <FontAwesomeIcon icon={faSpotify} size={`${size}x`} />
)

export default Spotify;
