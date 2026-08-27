import Image from 'next/image'
import styles from './writePage.module.css'
import { useState } from 'react'
function WritePage() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' />
      <div className={styles.editor}>
        <button className={styles.button}>
          <Image src="/plus.png" alt="Plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.button}>
              <Image src="/image.png" alt="Plus" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/external.png" alt="Plus" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src="/video.png" alt="Plus" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WritePage
