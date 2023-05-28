import React from 'react'
import Navbar from './Navbar'

const LayoutComponent = ({ children }) => {
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
