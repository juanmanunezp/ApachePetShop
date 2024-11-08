import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { CartContext } from "../../context/CartContext.jsx"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [hideItemCount, setHideItemCount] = useState(false)
    const { addProductInCart } = useContext(CartContext)
    const { idProduct } = useParams()

    const addProduct = (count) => {
        if (count > product.stock) {
            alert("No hay suficiente stock");
            return;
        }

        const productCart = { ...product, quantity: count }

        addProductInCart(productCart)
        setHideItemCount(true)
    }


    const getProduct = () => {
        const docRef = doc(db, "products", idProduct)
        getDoc(docRef)
            .then((dataDb) => {
                const productDb = { id: dataDb.id, ...dataDb.data() }
                setProduct(productDb)
            })
            .catch((error) => {
                console.error("Error getting product:", error);
                setProduct(null);
            });
    }

    useEffect(() => {
        getProduct()
    }, [idProduct])

    return (
        <ItemDetail product={product} addProduct={addProduct} />
    )
}

export default ItemDetailContainer