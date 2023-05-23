import Image from "next/image"
import { urlFor } from "../../library/client"
import styles from "./menu.module.css"
import Link from "next/link"

export default function Menu({foods}) {
    return (
        <div className={styles.container} id="menu">
            <div className={styles.menu_header}>
                <p>OUR MENU</p>
                <p>Check Out Our</p>
                <p>Best Rated Menu</p>
            </div>
            <div className={styles.menu_wrapper}>
               {
                foods.map((food, id)=>{
                    const src = urlFor(food.image).url()
                    return(
                        <div className={styles.food} key={id}>
                            <Link href={`/food/${food.slug.current}`}>
                                <div className={styles.food_image_wrapper}>
                                    <Image
                                        className={styles.food_image}
                                        loader={()=>src}
                                        src={src}
                                        alt=""
                                        width="100"
                                        height="100"
                                    />
                                </div>
                                <div className={styles.food_title}>
                                    <p>{food.name}</p>
                                    <p>₦{food.price[0]}</p>
                                </div>
                            </Link> 
                        </div>
                    )
                })
               }
            </div>
        </div>
        
    )
}