import React, { useState } from 'react'

import '../styles/globals.css'
import Header from '../components/Header'
import NavItem from '../components/NavItem'

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
    <>
      <div className={`z-1 fixed inset-0 bg-gray-900 inset-0 transition-opacity duration-300
               ${isMenuOpen ? 'bg-opacity-75 z-20' : 'bg-opacity-0 z-1'}`
      }
        onClick={handleModalClick}
      >
        <aside
          className=
          {`transform top-0 opacity-1 list-none left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`
          }>
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
        </aside>
      </div>

      <Header handleMenuToggle={handleMenuToggle} />
      <div className='pt-[80px] mx-auto w-[95%]'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
