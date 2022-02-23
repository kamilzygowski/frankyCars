import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faMap, faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Navbar:React.FC = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHouse} />
                    <p>Home</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>Contact</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faMap} />
                    <p>Localization</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <p>Cart</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar