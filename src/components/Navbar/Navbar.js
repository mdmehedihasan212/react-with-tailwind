import React from 'react';
import Link from '../Link/Link';
import { MenuIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', Link: '/home' },
        { id: 2, name: 'Shop', Link: '/shop' },
        { id: 3, name: 'Deal', Link: '/deal' },
        { id: 4, name: 'Contact', Link: '/contact' },
    ]
    return (
        <nav>
            <div className='w-6 h-6 md:hidden'>
                <MenuIcon></MenuIcon>
            </div>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;