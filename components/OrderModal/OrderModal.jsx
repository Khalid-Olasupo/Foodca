import { Modal, useMantineTheme } from "@mantine/core"
import { useState } from "react"
import  styles from "./ordermodal.module.css"
import {createOrder} from "../../library/orderHandler"
import { toast, Toaster } from "react-hot-toast"
import { useStore } from "../../store/store"
import { useRouter } from "next/router"

export default function OrderModal({opened, setOpened, paymentMethod}) {

  const [formData, setFormData] =useState({})
  const router = useRouter();

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const resetCart = useStore((state)=>state.resetCart)

  const total = typeof window !=="undefined" && localStorage.getItem("total")

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({...formData, total, paymentMethod})
    toast.success("Order placed successfully")
    resetCart()
    {
      typeof window !=="undefined" && localStorage.setItem("order", id)
    }

    router.push(`/order/${id}`)
  }

  const theme = useMantineTheme();

    return (
      <Modal
        opened={opened}
        onClose={()=>setOpened(null)}
        title="Pay on delivery"
        overlayProps={{
          color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form className={styles.form_container}>
          <input onChange={handleInput} type="text" required name="name" placeholder="Name"/>
          <input onChange={handleInput} type="phone" required name="phone" placeholder="Phone Number"/>
          <textarea onChange={handleInput} placeholder="Address" name="address" required row={3}></textarea>
          <span> You will pay <span>₦{total}</span> on delivery.</span>
          <button onClick={handleSubmit} type="submit">Place Order</button>
        </form>
      </Modal>
    )
}