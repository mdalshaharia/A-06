import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const DetailsLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DetailsLayout;
