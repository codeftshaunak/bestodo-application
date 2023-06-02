import React from 'react';
import LayoutComponent from './LayoutComponent';
import Hero from './Hero';

const HomeComponent: React.FC = () => {
    return (
        <LayoutComponent>
            <Hero />
        </LayoutComponent>
    );
}

export default HomeComponent;
