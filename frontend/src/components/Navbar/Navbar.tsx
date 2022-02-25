import React, { ReactNode } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faMap, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
interface NavbarProps {
    cartItem: ArrayLike<ReactNode>;
}
const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const navbarStyle = {
        color: '#000',
        textDecoration: 'none'
    }
    return (
        <div className='Navbar'>
            <ul>
                <Link to='/' style={navbarStyle}>
                    <li>
                        <FontAwesomeIcon icon={faHouse} />
                        <p>Home</p>
                    </li>
                </Link>
                <Link to='/contact' style={navbarStyle}>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <p>Contact</p>
                    </li>
                </Link>
                <li>
                    <FontAwesomeIcon icon={faMap} />
                    <p>Localization</p>
                </li>
                <Link to='/cart' style={navbarStyle}>
                    <li className='shopCartLink'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart</p>
                        <div className='cartItemsNumber'>
                            <p>{props.cartItem.length}</p>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar