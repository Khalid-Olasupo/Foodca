import {client} from "../../library/client"
import Layout from "../../components/Layout"
import styles from "../../styles/order.module.css"

export async function getServerSideProps({params}) {
    const query =  `*[_type == "order" && _id == "${params.id}"][0]`
    const order = await client.fetch(query)
    return {
        props: {
            order: order,
        }
    }
}



export default function Orders({order}) {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.details}>
                    <div>
                        <span>Order ID:</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name:</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Total:</span>
                        <span>₦{order.total}</span>
                    </div>
                    <div>
                        <span>Payment Method:</span>
                        <span>
                            {
                                order.method === 0 ? "Cash on Delivery" : "Online Payment (paid)"
                            }
                        </span>
                    </div>
                </div>
                <div className={styles.tracking}>
                    <div>
                        <p className={(order.status >= 1) ? styles.processed : styles.processing}>Order Placed</p>
                    </div>

                    <div>
                        <p className={(order.status >= 2) ? styles.processed : styles.processing}>Cooking</p>
                    </div>

                    <div>
                        <p className={(order.status >= 3) ? styles.processed : styles.processing}>On The Way</p>
                    </div>

                    <div>
                        <p className={(order.status >= 4) ? styles.processed : styles.processing}>Delivered</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
};