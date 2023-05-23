import React from "react"
import Image from "next/image"
import styles from "./services.module.css"
import feature1 from "../../public/s1.png"
import feature2 from "../../public/s2.png"
import feature3 from "../../public/s3.png"
import "remixicon/fonts/remixicon.css"
import Link from "next/link"

const Services = () => {
  return (
    <div className={styles.services_container} id="services">
        <div className={styles.feature_container}>
            <div className={styles.feature}>
                <div className={styles.feature_image_wrapper}>
                    <Image src={feature1} alt="" className={styles.feature_image}/>
                </div>
                <div className={styles.feature_image_content}>
                    <p>Easy to Order</p>
                    <p>You only need to follow few steps to order food.</p>
                    <div>
                    <Link href="#menu">Get Started </Link> <i class="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
            <div className={styles.feature}>
                <div className={styles.feature_image_wrapper}>
                    <Image src={feature2} alt="" className={styles.feature_image}/>
                </div>
                <div className={styles.feature_image_content}>
                    <p>Fast Delivery</p>
                    <p>Delivery that is always on time and even faster.</p>
                    <div>
                    <Link href="#menu">Get Started </Link> <i class="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
            <div className={styles.feature}>
                <div className={styles.feature_image_wrapper}>
                    <Image src={feature3} alt="" className={styles.feature_image}/>
                </div>
                <div className={styles.feature_image_content}>
                    <p>Quality Food</p>
                    <p>Not only fast for us, quality is also number one.</p>
                    <div>
                    <Link href="#menu">Get Started </Link> <i class="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services