import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

interface SidebarProps {
    setBarsIcon: Function;
}
const Sidebar:React.FC<SidebarProps> = ({setBarsIcon}) => {
    return (
        <div className='Sidebar'>
            <ul data-testid="sidebarUl">
                <Link to="/" className='routerLink' onClick={() => setBarsIcon(true)} data-testid="sidebarLink">
                    <li>Home</li>
                </Link>
                <Link to="/contact" className='routerLink' onClick={() => setBarsIcon(true)} data-testid="sidebarLink">
                    <li>Contact</li>
                </Link>
                <Link to="/cart" className='routerLink' onClick={() => setBarsIcon(true)} data-testid="sidebarLink">
                    <li>Shop Cart</li>
                </Link>
            </ul>
        </div>
    )
}
export default Sidebar;