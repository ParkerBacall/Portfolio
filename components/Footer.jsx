import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <nav className='font-josefin flex w-full flex-col-reverse lg:flex-row lg:justify-evenly items-center mt-[60px] mb-[20px] p-[40px] bg-white text-gray-700 border-t border-gray-200'>
                <div className='p-[40px] flex justify-evenly items-center'>
                    <Link className='p-[10px]' rel="noopener noreferrer" target="__blank" href="https://www.instagram.com/parkerbacall/" >
                        <Image
                            alt="Instagram Logo"
                            width={35}
                            height={35}
                            src="https://res.cloudinary.com/dpdnba5be/image/upload/v1688482494/instagram_zstkjc.png"
                        />
                    </Link>
                    <Link className='p-[10px]' rel="noopener noreferrer" target="__blank" href="https://www.parkerbacall.com/" >
                        <Image
                            alt="Programming Portfolio"
                            width={35}
                            height={35}
                            src="https://res.cloudinary.com/dpdnba5be/image/upload/v1688609890/programming-code-signs_pqk2bx.png"
                        />
                    </Link>
                    <Link className='p-[10px]' rel="noopener noreferrer" target="__blank" href="https://www.sentimentalskull.com/" >
                        <Image
                            alt="Sentimental Skull"
                            width={45}
                            height={45}
                            src="https://res.cloudinary.com/dpdnba5be/image/upload/v1688617116/Untitled_Artwork_mmbuir.jpg"
                        />
                    </Link>
                </div>
                <iframe className='m-w-[100%] hidden md:block' src="https://parkerbacall.substack.com/embed" width="500" height="275" style={{ border: '1px solid #EEE', background: 'white' }} frameborder="0" ></iframe>
                <iframe className='m-w-[100%] md:hidden' src="https://parkerbacall.substack.com/embed" width="350" height="275" style={{ border: '1px solid #EEE', background: 'white' }} frameborder="0" ></iframe>
            </nav >
        </>
    )
}
