import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import styles from './themetoggle.module.css'

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle} style={theme === 'light' ? { backgroundColor: '#0f172a' } : { backgroundColor: 'white' }}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={styles.ball} style={theme === 'light' ? { left: '1px', backgroundColor: "white" } : { right: '1px', backgroundColor: "#0f172a" }}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
