import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="Item">
      <div className="image-container">
        <img src={product.img} className="img-item" alt={product.name} />
      </div>
      <p className="title-item"> {product.name} </p>
      <p className="price-item">Precio: {product.price}</p>
      <Link to={"/item/" + product.id} className="button"> Ver producto </Link>
    </div>
  );
};

export default Item


