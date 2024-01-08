import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src='/p1.jpeg' alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>08.01.2024 - </span>
                    <span className={styles.category}>Travel</span>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit explicabo placeat odit ad reprehenderit quo consectetur excepturi neque vel eos.</p>
                <Link className={styles.link} href='/'>Read More</Link>
            </div>
        </div>
    )
}
export default Card