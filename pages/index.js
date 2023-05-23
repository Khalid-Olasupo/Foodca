import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import { client } from "../library/client"
import Menu from "../components/Menu/Menu"

export default function Home({foods}) {
  console.log("foods", foods)
  return (
    <div>
      <Layout>
        <Hero/>
        <Services/>
        <Menu foods={foods}/>
      </Layout>
    </div>
  )
}

export const getServerSideProps = async()=>{
  const query = `*[_type == "food"]`;
  const foods = await client.fetch(query)
  return {
    props: {
      foods
    }
  }
}