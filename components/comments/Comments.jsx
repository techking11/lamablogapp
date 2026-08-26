import Link from 'next/link';
import styles from './comments.module.css'
import Image from 'next/image';

function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder='Write a comment ....' className={styles.input}></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment.</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='avatar' width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Smith</span>
              <span className={styles.date}>01.10.204</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate omnis neque deserunt eum excepturi doloremque, reiciendis error unde possimus similique nobis obcaecati exercitationem perspiciatis non provident perferendis ut sit!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='avatar' width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Smith</span>
              <span className={styles.date}>01.10.204</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate omnis neque deserunt eum excepturi doloremque, reiciendis error unde possimus similique nobis obcaecati exercitationem perspiciatis non provident perferendis ut sit!
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt='avatar' width={50} height={50} className={styles.image} />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Smith</span>
              <span className={styles.date}>01.10.204</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate omnis neque deserunt eum excepturi doloremque, reiciendis error unde possimus similique nobis obcaecati exercitationem perspiciatis non provident perferendis ut sit!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
