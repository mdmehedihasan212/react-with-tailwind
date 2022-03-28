import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XCircleIcon, XCircleIcon as XIcon } from '@heroicons/react/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', Link: '/home' },
        { id: 2, name: 'Shop', Link: '/shop' },
        { id: 3, name: 'Deal', Link: '/deal' },
        { id: 4, name: 'Contact', Link: '/contact' },
    ]
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XCircleIcon></XCircleIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;