import { useState, useContext } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        repeatEmail: ""
    });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice, deleteCart } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (!/^\d+$/.test(dataForm.phone)) {
            toast.error("El teléfono solo debe contener números.");
            return;
        }

        if (dataForm.email !== dataForm.repeatEmail) {
            toast.error("Los emails tienen que coincidir.");
            return;
        }

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };

        uploadOrder(order);
    };

    const uploadOrder = (newOrder) => {
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, newOrder)
            .then((response) => {
                setOrderId(response.id);
                toast.success("¡Gracias por su compra!");
                deleteCart();
                updateStock();
            })
            .catch(() => toast.error("Hubo un error al procesar la orden."))
    };

    const updateStock = () => {
        cart.forEach(({ quantity, id, ...productCart }) => {
            const productRef = doc(db, "products", id);
            setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
                .catch(() => toast.error(`Error al actualizar stock de ${productCart.name}.`));
        });
    };

    return (
        <div className="checkout">
            {
                orderId ? (
                    <div>
                        <h2>Orden enviada correctamente 😁</h2>
                        <p>Guarde su número de seguimiento: <strong>{orderId}</strong></p>
                        <Link to="/" className="button-to-home">Volver al inicio</Link>
                    </div>
                ) : (
                    <FormCheckout
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm}
                    />
                )
            }
        </div>
    );
};

export default Checkout;
