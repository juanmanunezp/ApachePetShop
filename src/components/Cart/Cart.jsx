
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./cart.css";

const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext);

    const handleDeleteCart = () => {
        deleteCart();
        toast.success("Carrito vaciado con éxito");
    };

    const handleDeleteProduct = (id, name) => {
        deleteProductInCart(id);
        toast.info(`"${name}" eliminado del carrito`);
    };

    const renderProduct = (productCart) => (
        <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.img} width={100} alt={productCart.name} />
            <div className="info-item-cart">
                <p className="text-item-cart name">{productCart.name}</p>
                <p className="text-item-cart price">Precio c/u: ${Number(productCart.price || 0).toFixed(2)}</p>
                <p className="text-item-cart quantity">Cantidad: {productCart.quantity}</p>
                <p className="text-item-cart subtotal">
                    Subtotal: ${Number((productCart.price || 0) * (productCart.quantity || 0)).toFixed(2)}
                </p>
            </div>
            <button className="delete-item-cart" onClick={() => handleDeleteProduct(productCart.id, productCart.name)}>
                ❌
            </button>
        </div>
    );

    if (!Array.isArray(cart) || cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2 className="title-empty-cart">No tienes productos en el carrito</h2>
                <Link to="/" className="button-home-empty-cart">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h1 className="title-cart">Productos en el carrito</h1>
            { }
            {cart.map(renderProduct)}

            <div className="info-cart">
                <p className="text-info-cart">Precio total: ${totalPrice().toFixed(2)}</p>

                { }
                <Link
                    className="button-to-cart"
                    to="/checkout"
                    disabled={totalPrice() <= 0}
                >
                    Continuar con mi compra
                </Link>

                { }
                <button
                    className="button-delete-cart"
                    onClick={handleDeleteCart}
                    disabled={cart.length === 0}
                >
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
};

export default Cart;
