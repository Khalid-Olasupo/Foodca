import React from "react"
import styles from "./hero.module.css"
import cherry  from "../../public/Cherry.png"
import heroImage from "../../public/HeroImage.png"
import mobileImage from "../../public/foodca_mobile.png"
import Image from "next/image"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.intro_container}>
          <p>More than Faster</p>
          <Image src={cherry} alt="" className={styles.cherry}/>
        </div>
        <div className={styles.hero_main_container}>
          <h1 className={styles.hero_main_text}>Be The Fastest In Delivering Ordered <span>Foods</span>.</h1>
          <p>Our mission is to filling your tummy with delicious food and with fast and free delivery.</p>
          <button className={styles.hero_start_button}>Get Started</button>
        </div>
      </div>

      <div className={styles.right_container}>
        <div className={styles.hero_image_container}>
          <Image src={heroImage} alt="" className={styles.hero_image}/>
          <Image src={mobileImage} alt="" className={styles.mobile_hero_image}/>
        </div>
      </div>
    </div>
  )
}

export default Hero