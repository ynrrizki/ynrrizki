'use client'
import { Fragment, useState, useEffect, useCallback } from "react";
import NavItem from "./NavItem.js";
import NavMobile from "./NavMobile.js";
import Router from 'next/router';
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link.js";
import { BiLogoGithub, BiLogoLinkedin, BiLogoWhatsapp } from 'react-icons/bi';

export default function Navbar() {
    const [y, setY] = useState(0);
    const [border, setBorder] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDialog, setIsOpenDialog] = useState(false)
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

    function closeModal() {
        setIsOpenDialog(false)
    }

    function openModal() {
        setIsOpenDialog(true)
    }

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <>
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
                            <button onClick={() => openModal()} className="text-sm md:text-xl bg-[#050505] text-white font-semibold  py-1 px-3 rounded-lg flex items-center">Contact Me</button>
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
            <Transition appear show={isOpenDialog} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        My Contact
                                    </Dialog.Title>
                                    <div className="my-7 flex gap-3 items-center justify-center">
                                        <Link href={""}>
                                            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex justify-center items-center">
                                                <BiLogoGithub size={50} />
                                                {/* <div className="hidden aspect-w-1 aspect-h-1  bg-[length:100%] dark:block">
                                                </div> */}
                                            </div>
                                        </Link>
                                        <Link href={""}>
                                            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex justify-center items-center">
                                                <BiLogoLinkedin size={50} />
                                            </div>
                                        </Link>
                                        <Link href={""}>
                                            <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden flex justify-center items-center">
                                                <BiLogoWhatsapp size={50} />
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}