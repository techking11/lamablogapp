import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt='Cuture' fill sizes='100vw, auto' loading="eager" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.03.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolore animi. Hic neque debitis quia commodi nam? Aliquam fugit numquam porro ipsa. Quia distinctio aliquid magni alias similique dolorum eligendi.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  )
}

export default Card
