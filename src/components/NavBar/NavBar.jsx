import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="nav-wrapper white">
      <div className="container">

        <Link to="/" className="brand-logo center">
          <img src="https://st.depositphotos.com/1217087/1591/v/950/depositphotos_15913957-stock-illustration-dog-and-leash.jpg" alt="logo de inicio de Apache petshop" width={52} />
        </Link>

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li className="category"><Link to="/category/perro"> PERRO </Link></li>
          <li className="category"><Link to="/category/gato">GATO</Link></li>
          <li className="category"><Link to="/category/raciones">RACIONES</Link></li>
        </ul>
        <div className="right cart-widget-container">
          <CartWidget />
        </div>

      </div>
    </nav>
  );
};
export default NavBar




