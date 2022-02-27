import React, { ReactNode } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
interface NavbarProps {
    cartItem: ArrayLike<ReactNode>;
    setBarsIcon: Function;
    barsIcon: boolean;
}
const Navbar: React.FC<NavbarProps> = ({cartItem, setBarsIcon, barsIcon}) => {
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
                <Link to='/cart' style={navbarStyle}>
                    <li className='shopCartLink'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Cart</p>
                        <div className='cartItemsNumber'>
                            <p>{cartItem.length}</p>
                        </div>
                    </li>
                </Link>
            </ul>
            <Link to="/sidebar" onClick={() => setBarsIcon(false)}>
                {barsIcon ? <FontAwesomeIcon icon={faBars} className="mobileMenu" data-testid="bars"/> : null}
            </Link>
        </div>
    )
}
export default Navbar