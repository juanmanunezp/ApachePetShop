import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (

    <nav className="nav-wrapper white">
      <div className="container">
        <a href="/" className="brand-logo center">
          <img src="../src/assets/logo.jpg" alt="logo" width={64} />
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="">PERRO</a></li>
          <li><a href="">GATO</a></li>
          <li><a href="">RACIONES</a></li>
        </ul>
        <div className="right cart-widget-container">
          <CartWidget />
          <p className="item" >1</p>
        </div>
      </div>
    </nav>
  );
};
export default NavBar




