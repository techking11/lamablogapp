import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt='Avatar' fill sizes='100vw, auto' loading='eager' className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Smith</span>
              <span className={styles.date}>01.10.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='Side Photo' fill sizes='100vw, auto' loading='eager' className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nemo iste minus hic sed dolore vitae debitis blanditiis expedita iusto adipisci, repudiandae alias maxime quam accusantium modi nesciunt. Possimus, rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iusto modi placeat incidunt nostrum odio impedit eius ea! Aut blanditiis omnis, nulla nobis ipsa in! Distinctio enim possimus inventore suscipit.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nemo iste minus hic sed dolore vitae debitis blanditiis expedita iusto adipisci, repudiandae alias maxime quam accusantium modi nesciunt. Possimus, rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iusto modi placeat incidunt nostrum odio impedit eius ea! Aut blanditiis omnis, nulla nobis ipsa in! Distinctio enim possimus inventore suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, nemo iste minus hic sed dolore vitae debitis blanditiis expedita iusto adipisci, repudiandae alias maxime quam accusantium modi nesciunt. Possimus, rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iusto modi placeat incidunt nostrum odio impedit eius ea! Aut blanditiis omnis, nulla nobis ipsa in! Distinctio enim possimus inventore suscipit.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default page
