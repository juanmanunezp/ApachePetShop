import { useState, useEffect } from "react"
import ItemList from "./itemList"
import { getProducts } from "../../data/data"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error(error)
      })
    }, [])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer