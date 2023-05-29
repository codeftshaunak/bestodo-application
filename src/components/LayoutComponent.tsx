import React from 'react'
import Navbar from './Navbar'

const LayoutComponent: React.FC = ({ children }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent
