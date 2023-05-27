import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import Image from 'next/image'

export default function Header({ handleMenuToggle }) {


    return (
        <>
            <nav className='font-josefin flex fixed w-full justify-start lg:justify-between items-center px-6 h-[110px] bg-white text-gray-700 border-b border-gray-200 z-20'>
                <button className="lg:hidden" onClick={handleMenuToggle}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect className="rounded" width="100" height="15"></rect>
                        <rect className="rounded" y="30" width="100" height="15"></rect>
                        <rect className="rounded" y="60" width="100" height="15"></rect>
                    </svg></button>
                <Link href="/">
                    <Image src="https://res.cloudinary.com/dpdnba5be/image/upload/v1685157162/Untitled_Artwork_2_onjjyk.png" alt="Parker Bacall" width="300" height="150" />
                </Link>
                <ul className="flex justify-evenly items-center hidden lg:flex">
                    <NavItem title="Digital Illustrations" link="/digital-illustrations" />
                    <NavItem title="Paintings" link="/paintings" />
                    <NavItem title="Illustraitions" link="/illustrations" />
                    <NavItem title="Prints" link="/prints" />
                    <NavItem title="Designs " link="/Designs" />                   
                    <NavItem title="Murals" link="/murals" />
                    <NavItem title="Merch" link="https://www.sentimentalskull.com/" />
                    <NavItem title="About" link="/about" />
                </ul>
            </nav >
        </>
    )
}
