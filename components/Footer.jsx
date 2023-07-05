import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <nav className='font-josefin flex w-full justify-center lg:justify-center items-center mt-[60px] mb-[20px] p-[40px] bg-white text-gray-700 border-t border-gray-200'>
                <iframe src="https://parkerbacall.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameborder="0" ></iframe>
            </nav >
        </>
    )
}
