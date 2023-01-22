import React, { useState } from 'react'
import Image from 'next/image'
import NavItem from './NavItem'

export default function Header({ handleMenuToggle }) {


    return (
        <>
            <nav className="flex fixed w-full justify-start lg:justify-between items-center px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
                <button className="lg:hidden" onClick={handleMenuToggle}>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect className="rounded" width="100" height="15"></rect>
                        <rect className="rounded" y="30" width="100" height="15"></rect>
                        <rect className="rounded" y="60" width="100" height="15"></rect>
                    </svg></button>
                <h1 className="text-3xl p-4 font-bold">Parker Bacall</h1>
                <ul  className="flex justify-evenly items-center hidden lg:flex">
                    <NavItem title="Digital Illustration" link="/digitial-illustration" />
                    <NavItem title="Paintings" link="/paintings" />
                    <NavItem title="Animations" link="/animations" />
                    <NavItem title="Prints" link="/prints" />
                    <NavItem title="Murals" link="/Murals" />
                    <NavItem title="Comisisons" link="/comisisons" />
                    <NavItem title="Daily Drawings" link="/daily-drawings" />
                    <NavItem title="Exhibitions" link="/exhibitions" />
                    <NavItem title="Merch" link="/merch" />
                    <NavItem title="About" link="/about" />
                </ul>
            </nav >
        </>
    )
}
