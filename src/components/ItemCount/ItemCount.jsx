import { useState } from "react"
import "./ItemCount.css";

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className="item-count">
            <button className="btn-count" onClick={handleClickDecrement} disabled={count <= 1}>-</button>
            <p className="count-display">{count}</p>
            <button className="btn-count" onClick={handleClickIncrement} disabled={count >= stock}>+</button>
            <button className="add-to-cart" onClick={() => addProduct(count)}>Agregar producto</button>
        </div>
    )
}

export default ItemCount