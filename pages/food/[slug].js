import { useState } from "react"
import Layout from "../../components/Layout"
import { client } from "../../library/client"
import styles from "../../styles/food.module.css"
import Image from "next/image"
import  {urlFor}  from "../../library/client"
import "remixicon/fonts/remixicon.css"
import { useStore } from "../../store/store"
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link"
import ErrorPage from 'next/error'
import { useRouter } from "next/router"


export default function Food({food}) {

    const src = urlFor(food.image).url()
    const [Quantity, setQuantity] = useState(1)

    // add to cart function

    const addFood = useStore((state) => state.addFood)
    const addToCart = () => {
        addFood(
            {...food, price: food.price[0], quantity: Quantity}
        )
        toast.success("Added to cart")
    }
    
    // handle quantity

    const decrement = () => {
        if ( Quantity == 1) {
            null
        } else {
            setQuantity(Quantity - 1)
        }
    }
    const increment = () => {
        setQuantity(Quantity + 1)
    }

    return (
            <Layout>
            <div className={styles.container}>
                <Link href="/#menu" className={styles.go_back}><i class="ri-arrow-left-s-line"></i> Back</Link>
                <div className={styles.content_container}>
                    <div className={styles.left_side}>
                        <Image
                            className={styles.food_image}
                           
                            src={src}
                            alt=""
                            width="500"
                            height="500"
                        />
                    </div>
                    <div className={styles.left_side}>
                        <h1 className={styles.food_title}>{food.name}</h1>
                        <p className={styles.food_details}>{food.details}</p>
                        <p className={styles.food_price}>₦{food.price[0]}</p>
                        <div className={styles.quantity}>
                        <i class="ri-arrow-left-s-fill" onClick={decrement}></i><span>{Quantity}</span><i class="ri-arrow-right-s-fill" onClick={increment}></i>
                        </div>
                        <button className={styles.cart_button} onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                
                
            </div>
            <Toaster/>
        </Layout>
        
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="food" && defined(slug.current)][].slug.current`
    )
    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true,
    }
}

export async function getStaticProps( context ) {
    const {slug = ""} = context.params;
    const food = await client.fetch(
        `*[_type == "food" && slug.current == $slug][0]`, {slug}
        )
    return {
        props: {
            food: await food
    }
}
}



