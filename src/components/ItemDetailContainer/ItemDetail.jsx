import "./ItemDetailContainer.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <div className="img-detail">
                <div className="main-image">
                    <img src={product.img} alt="" />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">{product.description}</p>
                <p className="text-detail">Precio: ${product.price}</p>
            </div>
        </div>
    )
}
export default ItemDetail