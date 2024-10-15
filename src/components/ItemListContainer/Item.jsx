import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="Item">
      <img src={product.img} className="img-item" alt="" />
      <p className="title-item"> {product.name} </p>
      <p className="price-item">Precio: {product.price}</p>
      <Link to={ "/item/" + product.id } className="button" > Ver detalles </Link>
    </div>
  )
}

export default Item