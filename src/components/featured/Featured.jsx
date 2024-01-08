import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, schizo here!</b> Discover my boring stories and bad ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/p1.jpeg' alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laboriosam.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae modi amet! Sed iusto rerum pariatur eos doloremque, minima, dolore corrupti eius, vero architecto quis? Hic aspernatur nostrum non voluptatibus.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
export default Featured