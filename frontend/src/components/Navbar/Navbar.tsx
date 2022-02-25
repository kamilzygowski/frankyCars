import React, { ReactNode } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faMap, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
interface NavbarProps {
    shopCart: ArrayLike<ReactNode>;
}
const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {

    const ret = () => {
        return props.shopCart.length;
    }
    const navbarStyle = {
        color: '#000',
        textDecoration: 'none'
    }
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
                    <Link to='/cart' style={navbarStyle}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart</p>
                        <div className='cartItemsNumber'>
                            <p>{ret()}</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar