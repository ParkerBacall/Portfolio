import React from 'react'
import Link from 'next/link'

export default function NavItem({ title, link }) {
    return (
        <li className='p-2 font-medium'>
            <button>
                {title === 'Screen Printing' || title === 'Interactive' ? 
                <a href={link} target="_blank" rel="noreferrer" >{title}</a>
                :
                    <Link href={link}>
                        {title}
                    </Link>
                }
            </button>
        </li>
    )
}
