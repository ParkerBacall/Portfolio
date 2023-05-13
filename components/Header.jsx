import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

export default function Header({ handleMenuToggle }) {


    return (
        <>
            <nav className='font-josefin flex fixed w-full justify-start lg:justify-between items-center px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-20'>
                <button className="lg:hidden" onClick={handleMenuToggle}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect className="rounded" width="100" height="15"></rect>
                        <rect className="rounded" y="30" width="100" height="15"></rect>
                        <rect className="rounded" y="60" width="100" height="15"></rect>
                    </svg></button>
                <h1 className="text-3xl p-4 font-bold">
                    <Link href="/">
                    Parker Bacall
                    </Link>
                    </h1>
                <ul  className="flex justify-evenly items-center hidden lg:flex">
                    <NavItem title="Digital Illustrations" link="/digital-illustrations" />
                    <NavItem title="Paintings" link="/paintings" />
                    <NavItem title="Animations" link="/animations" />
                    <NavItem title="Prints" link="/prints" />
                    <NavItem title="Murals" link="/murals" />
                    <NavItem title="Daily Drawings" link="/daily-drawings" />
                    <NavItem title="Exhibitions" link="/exhibitions" />
                    <NavItem title="Merch" link="https://www.sentimentalskull.com/" />
                    <NavItem title="About" link="/about" />
                </ul>
            </nav >
        </>
    )
}
