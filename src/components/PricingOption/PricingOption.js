import React from 'react';

const PricingOption = ({ option }) => {
    const { name, price } = option;

    return (
        <div className='bg-white p-4'>
            <h2>{name} : ${price}</h2>
        </div>
    );
};

export default PricingOption;