'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NavItem(props) {
    const router = useRouter();
    return (
        <li className='cursor-pointer hover:bg-gray-300'>
            <Link href={props.href ?? '/'} className={(router.asPath == props.href) ? 'underline' : 'no-underline'}>
                <span className='xl:py-5 block text-sm font-medium py-3 xl:px-5 px-8'>{props.children}</span>
            </Link>
        </li>
    )
}
