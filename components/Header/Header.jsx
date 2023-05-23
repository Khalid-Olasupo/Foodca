import React from "react"
import styles from "../Header/header.module.css"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"
import { useStore } from "../../store/store"

const navItems = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Services",
    path: "/#services"
  },
  {
    name: "Our Menu",
    path: "/#menu"
  }
]

const Header = () => {
  


  const items = useStore((state) =>  state.cart.foods.length)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_wrapper}>
          <div className={styles.logo_container}>
            <Link href="/"><h1 className={styles.logo}>Food<span>Ca</span></h1></Link>
          </div>
          <nav className={styles.navigation}>
            {
              navItems.map(item => (
                <Link className={styles.navItem} href={item.path} key={item.name}>{item.name}</Link>
              ))
            }
          </nav>
          <Link href={"/cart"}>
            <div className={styles.shop_cart}>
                <p className={styles.cart_badge}>{items}</p>
                <i className="ri-shopping-bag-line"></i>
              </div>
          </Link>
            
        </div>
      </div>
    </header>
  )
}

export default Header