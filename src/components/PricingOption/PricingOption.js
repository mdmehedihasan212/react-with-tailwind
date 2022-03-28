import React from 'react';
import Benefit from '../Benefit/Benefit';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const PricingOption = ({ option }) => {
    const { name, price, benefits } = option;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-lg font-bold text-white font-serif'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-400'>/month</span>
            </p>
            <div>
                <h2 className='text-xl text-left'>Benefits: </h2>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='flex w-full bg-green-500 text-white py-2 justify-center mt-4 rounded text-x hover:text-green-800'>
                Buy Now <ArrowCircleRightIcon className='w-6 h-6 ml-2'></ArrowCircleRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;