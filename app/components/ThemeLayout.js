'use client'
import Navbar from "./Navbar"

export default function ThemeLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}