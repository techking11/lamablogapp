import Link from 'next/link'
import MenuPost from '../menuPost/MenuPost'
import styles from './menu.module.css'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <MenuPost type="fashion" />
        <MenuPost type="food" />
        <MenuPost type="travel" />
      </div>

      <h2 className={styles.subtitle} style={{ marginTop: "50px" }}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}> Style
        </Link>
        <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}> Fashion
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}> Food
        </Link>
        <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>Travel
        </Link>
        <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}> Culture
        </Link>
        <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}> Coding
        </Link>
      </div>

      <h2 className={styles.subtitle} style={{ marginTop: "50px" }}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pickup</h1>
      <div className={styles.items}>
        <MenuPost type="fashion" withImage="true" />
        <MenuPost type="food" withImage="true" />
        <MenuPost type="travel" withImage="true" />
      </div>
    </div>
  )
}

export default Menu
