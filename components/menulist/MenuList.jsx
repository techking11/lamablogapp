import Menu from '../menu/Menu'
import styles from './menulist.module.css'

function MenuList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitles}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
      </div>
    </div>
  )
}

export default MenuList
