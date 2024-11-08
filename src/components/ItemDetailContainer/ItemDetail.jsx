import { Link, useNavigate } from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ product, addProduct, hideItemCount }) => {

    const navigate = useNavigate();

    const handleGoToCart = () => {
        navigate("/cart");
    };

    return (
        <div className="item-detail">
            <div className="img-detail">

                <img src={product.img} alt={product.name} />

            </div>

            <div className="text-detail-container">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="text-price">Precio: ${product.price}</p>

                <div className="buttons">
                    {hideItemCount === true ? (
                        <Link to="/cart" className="button-end-buy">Terminar mi compra</Link>
                    ) : (

                        <div className="count-controls">
                            <ItemCount stock={product.stock} addProduct={addProduct} />
                            <button onClick={handleGoToCart} className="button-go-to-cart">Ir al carrito</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ItemDetail