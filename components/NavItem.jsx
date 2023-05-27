import React from 'react'
import Link from 'next/link'

export default function NavItem({ title, link }) {
    return (
        <li className='p-2 font-medium'>
            <button>
                <Link href={link}>
                    {title}
                </Link>
            </button>
        </li>
    )
}
