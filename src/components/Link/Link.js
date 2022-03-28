import React from 'react';

const Link = ({ route }) => {
    const { name, Link } = route;
    return (
        <li className='mr-16'>
            <a href={Link}>{name}</a>
        </li>
    );
};

export default Link;