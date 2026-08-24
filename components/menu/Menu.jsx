import MenuPost from '../menuPost/MenuPost'
import styles from './menu.module.css'
import MenuCategories from '../menuCategories/MenuCategories'

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost />

      <h2 className={styles.subtitle} style={{ marginTop: "50px" }}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle} style={{ marginTop: "50px" }}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pickup</h1>
      <MenuPost withImage={true} />
    </div>
  )
}

export default Menu
