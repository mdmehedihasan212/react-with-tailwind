import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = ({ option }) => {
    const { name, price, benefits } = option;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-lg font-bold text-white'>{name}</h2>
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
        </div>
    );
};

export default PricingOption;