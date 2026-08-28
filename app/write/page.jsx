"use client";

import { useState } from 'react'
import Image from 'next/image'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import styles from './writePage.module.css'
function WritePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
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
        <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story' />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage
