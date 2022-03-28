import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, benefits: ['lifetime free', 'unlimited use', 'only unlock feature', 'network medium', 'service limited'] },
        { id: 1, name: 'Medium', price: 8.55, benefits: ['extra service free', 'unlimited use', 'only extra 10 feature', 'network medium', 'service limited'] },
        { id: 1, name: 'High', price: 13.99, benefits: ['everything free', 'unlimited use', 'extra 20 feature', 'network high', 'service unlimited'] },
        { id: 1, name: 'Super', price: 15.50, benefits: ['everything super fast', 'unlimited use', 'all feature', 'network super', 'service lifetime unlimited'] },
    ]
    return (
        <div className='bg-indigo-200 p-2 m-2'>
            <h1 className='text-5xl font-mono'>Best Deals Of The Town</h1>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eos officiis. Tempore eius temporibus adipisci. Odio veniam quae praesentium corporis!</p> */}
            <div className='grid md:grid-cols-4 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;