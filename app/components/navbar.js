'use client'
import React, { useState, useEffect, useCallback } from "react";
import NavItem from "./NavItem";
import NavMobile from "./NavMobile";
import { useRouter } from 'next/router'
import Router from 'next/router';

export default function Navbar() {
    const [y, setY] = useState(0);
    const [border, setBorder] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    Router.events.on("routeChangeStart", () => setIsOpen(false))

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY && y < 1) {
                setBorder('')
            } else if (y < window.scrollY && y > 1) {
                setBorder('border-b border-gray-200')
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <nav className='w-full h-20 sticky top-0 z-50'>
            <div className="bg-white bg-opacity-90 px-10">
                <div className={`flex items-center justify-between py-7 ${border}`}>
                    <div className="flex items-center gap-16">
                        <a href="/" className="font-bold text-xl md:text-3xl">ynrrizki</a>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-5">
                                <a href="/" className="text-xl font-semibold text-gray-500 py-1 px-3 rounded-lg flex items-center hover:bg-gray-100">Home</a>
                                <a href="/about" className="text-xl font-semibold text-gray-500 py-1 px-3 rounded-lg flex items-center hover:bg-gray-100">About</a>
                                <a href="/portofolio" className="text-xl font-semibold text-gray-500 py-1 px-3 rounded-lg flex items-center hover:bg-gray-100">Portofolio</a>
                            </div>
                        </div>
                    </div>
                    <div className="item-center hidden md:flex">
                        <a href="/" className="text-sm md:text-xl bg-[#050505] text-white font-semibold  py-1 px-3 rounded-lg flex items-center">Contact Me</a>
                    </div>
                    <div className="item-center flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                    {/* <ul className="xl:flex hidden">
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/about">About</NavItem>
                        <NavItem href="/portfolio">Portfolio</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </ul> */}
                </div>
            </div>
            <NavMobile isOpen={isOpen}>
                <ul>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/portofolio">Portofolio</NavItem>
                    <NavItem href="/">Contact</NavItem>
                </ul>
            </NavMobile>
        </nav>
    )
}