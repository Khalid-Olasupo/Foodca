import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.footer_warpper}>
                <p>All right reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer