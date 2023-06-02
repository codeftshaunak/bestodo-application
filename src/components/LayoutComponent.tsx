import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    );
}

export default LayoutComponent;
