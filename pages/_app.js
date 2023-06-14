import React, { useState } from 'react'

import '../styles/globals.css'
import Header from '../components/Header'
import NavItem from '../components/NavItem'

import localFont from '@next/font/local'

const myFont = localFont({
  src: '../fonts/JosefinSans.ttf',
  variable: '--font-josefin'
})

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleModalClick = () => {
    if (isMenuOpen == true) {
      setIsMenuOpen(!isMenuOpen)
    }
  }
  return (
    <main className={`${myFont.variable} font-josefin font-light`}>
      <div className={`z-1 fixed inset-0 bg-gray-900 inset-0 transition-opacity duration-300
               ${isMenuOpen ? 'bg-opacity-75 z-20' : 'bg-opacity-0 z-1'}`
      }
        onClick={handleModalClick}
      >
        <aside
          className=
          {`transform top-[106px] opacity-1 list-none left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`
          }>
          <NavItem title="Digital Illustrations" link="/digital-illustrations" />
          <NavItem title="Paintings" link="/paintings" />
          <NavItem title="Animations" link="/animations" />
          <NavItem title="Illustraitions" link="/illustrations" />
          <NavItem title="Prints" link="/prints" />
          <NavItem title="Designs " link="/Designs" />
          <NavItem title="Murals" link="/murals" />
          <NavItem title="Interactive" link="/interactive" />
          <NavItem title="Screen Printing" link="https://www.sentimentalskull.com/" />
          <NavItem title="About" link="/about" />
        </aside>
      </div>

      <Header handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <div className='pt-[140px] mx-auto w-[95%]'>
        <Component {...pageProps} />
      </div>
    </main>
  )
}
