import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'

function CardList() {
  return (
    <div className={styles.container}>
      Card List Page
      <Pagination />
    </div>
  )
}

export default CardList
