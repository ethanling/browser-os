import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

export const Logo = ({ size }) => {
    return (
        <FontAwesomeIcon icon={faDesktop} size={`${size}x`} />
    )
}

export default Logo
