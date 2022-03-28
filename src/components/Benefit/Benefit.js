import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';


const Benefit = ({ benefit }) => {
    return (
        <p className='flex items-center'>
            <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
            {benefit}
        </p>
    );
};

export default Benefit;