import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (

    <nav className="nav-wrapper white">
      <div className="container">
        <a href="/" className="brand-logo center">
          <img src="../src/assets/logo.png" alt="logo" width={62} />
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="">PERRO</a></li>
          <li><a href="">GATO</a></li>
          <li><a href="">RACIONES</a></li>
        </ul>
        <div className="right cart-widget-container">
          <CartWidget />
          
        </div>
      </div>
    </nav>
  );
};
export default NavBar




