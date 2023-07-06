import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <nav className='font-josefin flex w-full flex-col-reverse lg:flex-row lg:justify-evenly items-center mt-[60px] mb-[20px] p-[40px] bg-white text-gray-700 border-t border-gray-200'>
                <div className='p-[40px]'>
                    <Link rel="noopener noreferrer" target="__blank" href="https://www.instagram.com/parkerbacall/" >
                        <Image
                            alt="Instagram Logo"
                            width={35}
                            height={35}
                            src="https://res.cloudinary.com/dpdnba5be/image/upload/v1688482494/instagram_zstkjc.png"
                        />
                    </Link>
                </div>
                <iframe src="https://parkerbacall.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameborder="0" ></iframe>
            </nav >
        </>
    )
}
