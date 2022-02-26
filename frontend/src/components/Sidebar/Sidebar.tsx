import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

interface SidebarProps {
    setBarsIcon: Function;
}
export const Sidebar = (props: SidebarProps) => {
    return (
        <div className='Sidebar'>
            <ul>
                <Link to="/" className='routerLink' onClick={() => props.setBarsIcon(true)}>
                    <li>Home</li>
                </Link>
                <Link to="/contact" className='routerLink' onClick={() => props.setBarsIcon(true)}>
                    <li>Contact</li>
                </Link>
                <Link to="/cart" className='routerLink' onClick={() => props.setBarsIcon(true)}>
                    <li>Shop Cart</li>
                </Link>
            </ul>
        </div>
    )
}
