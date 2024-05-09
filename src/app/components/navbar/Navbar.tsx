"use client"
import { HamburgerMenu, Logo } from './'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-orange-600 text-slate-100'>
      <Logo />
      <HamburgerMenu />
    </div>
  )
}

export default Navbar