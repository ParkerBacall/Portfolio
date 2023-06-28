
import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
    return (
        <div className='flex items-center flex-col'>
            <h2 className='p-2 text-[24px]'>
                Woah Page Not Found
            </h2>

            <Link className='text-[18px] underline' href="/">Return to home</Link>
        </div>
    )
}
