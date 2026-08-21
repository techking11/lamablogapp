"use client";
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themetoggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
import styles from './navbar.module.css'

function Navbar() {
  const { value } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
