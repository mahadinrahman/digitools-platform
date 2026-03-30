import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex mt-3 gap-1.5 mb-2'><Check className='text-green-500'></Check>{feature}</p>
        </div>
    );
};

export default Feature;