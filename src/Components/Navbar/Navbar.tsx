"use client"

import React, { useState } from 'react'
import styles from '@/Styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GeekRoomLogo from '../../../public/Images/GeekRoomLogo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.Navbar}>
      <div className={styles.GeekRoomLogo}>
        <Image src={GeekRoomLogo} alt='GeekRoomLogo' />
      </div>
      <div className={styles.Hamburger} onClick={toggleMenu}>
        <div className={styles.Line}></div>
        <div className={styles.Line}></div>
        <div className={styles.Line}></div>
      </div>
      <div className={`${styles.Navbar_Links} ${isOpen ? styles.show : ''}`}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <span className={pathname === href ? styles.active : ''}>
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
