import Layout from "../components/Layout"
import {useStore} from "../store/store"
import styles from "../styles/cart.module.css"
import Image from "next/image"
import { urlFor } from "../library/client"
import "remixicon/fonts/remixicon.css"
import toast, { Toaster } from "react-hot-toast"
import Link from "next/link"
import React, { useState } from "react"
import OrderModal from "../components/OrderModal/OrderModal"

export default function Cart() {
    
    const cartData = useStore((state) =>  state.cart.foods)
    const  removeItem = useStore((state) => state.removeItem)
    const [paymentMethod, setPaymentMethod] = useState(null)

    const handleRemove = (id) => {
        removeItem(id)
        toast.error("item removed")
    }

    const total = () => cartData.reduce((total, item)=> total + item.quantity * item.price, 0)


    const handleOnDelivery = ()=>{
        setPaymentMethod(0)
        typeof window !== "undefined" && localStorage.setItem("total", total())
    }

  return (
    <Layout>
        {
            cartData.length != 0 ?
        <div className={styles.container}>
            <div className={styles.cart_items}>
            <h2>{cartData.length != 0 ? "Cart Items" : ""}</h2>
                {
                    cartData.sort().reverse().map((item, id) => {
                        const src = urlFor(item.image).url()
                        return(
                            <div key={id} className={styles.cart_item}>
                                <Image
                                        className={styles.food_image}
                                        loader={()=>src}
                                        src={src}
                                        alt=""
                                        width="80"
                                        height="80"
                                    />
                                <div>
                                    <h3>{item.name}</h3>
                                </div>
                                <div>
                                    <p><span>Price:</span> <br/>  ₦{item.price}</p>
                                </div>
                                <div>
                                    <p><span>Quantity:</span> <br/>  {item.quantity}</p>
                                </div>

                                <div>
                                    <i onClick={()=>handleRemove(id)}  className="ri-close-circle-fill"></i>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>

            
                <div className={styles.cart_sidebar}>
                <h2>Cart</h2>
                <div>
                    <span>Items:</span>
                    <span>{cartData.length}</span>
                </div>
                <div>
                    <span>Total:</span>
                    <span>₦{total()}</span>
                </div>
                <div className={styles.pay_buttons}>
                    <button onClick={handleOnDelivery}>Pay on Delivery</button>
                    <button>Pay Now</button>
                </div>
            </div>
            
        </div> :
        <div className={styles.container}>
            <div className={styles.empty_cart}>
                <p>Your cart is currently empty.</p>
                <Link href="/#menu"><button>Go to menu</button></Link>
            </div>
            
        </div>
}
        <Toaster/>

        <OrderModal
            opened = {paymentMethod === 0}
            setOpened = {setPaymentMethod}
            paymentMethod = {paymentMethod}
        />
    </Layout>
  )
}