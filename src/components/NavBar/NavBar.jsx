import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (

    <nav className="nav-wrapper white">
      <div className="container">
        <a href="/" className="brand-logo center">
          <img src="https://st.depositphotos.com/1217087/1591/v/950/depositphotos_15913957-stock-illustration-dog-and-leash.jpg" alt="logo" width={52} />
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




