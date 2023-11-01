'use client'
import Navbar from "./Navbar"

export function ThemeLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}