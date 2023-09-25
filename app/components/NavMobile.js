import React from 'react'

export default function NavMobile({ children, isOpen }) {
    return (
        <div className={`border-b-2 bg-white py-2  border-dashed ${(isOpen) ? 'xl:hidden block' : 'hidden'}`}>
            {children}
        </div>
    )
}
