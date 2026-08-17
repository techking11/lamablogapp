import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'

function CardList() {
  return (
    <div className={styles.container}>
      <h1>Card List Page</h1>
      <Pagination />
    </div>
  )
}

export default CardList
