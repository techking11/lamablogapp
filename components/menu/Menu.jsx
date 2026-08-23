import Image from "next/image"
import Link from "next/link"
import styles from "./menu.module.css"

function Menu() {
  return (
    <Link href="/" className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="travel" fill loading="eager" sizes="100vw, auto" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doh</span>
          <span className={styles.date}> - 13.08.2023</span>
        </div>
      </div>
    </Link>
  )
}

export default Menu
