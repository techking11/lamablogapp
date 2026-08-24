import Image from "next/image"
import Link from "next/link"
import styles from "./menupost.module.css"

function MenuPost({ withImage = false }) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.item}>
        {withImage &&
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="travel" fill loading="eager" sizes="100vw, auto" className={styles.image} />
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doh</span>
            <span className={styles.date}> - 13.08.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage &&
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="travel" fill loading="eager" sizes="100vw, auto" className={styles.image} />
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doh</span>
            <span className={styles.date}> - 13.08.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage &&
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="travel" fill loading="eager" sizes="100vw, auto" className={styles.image} />
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doh</span>
            <span className={styles.date}> - 13.08.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPost
