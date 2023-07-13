import { Link } from "react-router-dom";
import "./Navbar.scss";
import Dropdown from "./Dropdown";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import Search from "./Search/Search";
import { Context } from "../utils/context";
import Cart from "./Cart/Cart";
import Logo from "../assets/logo/mars-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className={`mn-contr ${scrolled ? "sticky-header" : ""}`}>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-light fa-xmark" : "fa-light fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-mars-purifier-who-we-are"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <div className="desk-link">
                <Link className="nav-links " onClick={closeMobileMenu}>
                  Air purifier
                </Link>
              </div>
              <div className="mov-link">
                <div class="acc-kontainer">
                  <div>
                    <input type="radio" name="acc" id="acc1" />
                    <label for="acc1">Air purifier</label>
                    <div class="acc-body">
                      <ul onClick={closeMobileMenu}>
                        <li onClick={() => navigate("/dental-air-purifiers-for-dental-clinics-reduce-fallow-time")}>Dentistry</li>
                        <li onClick={() => navigate("/air-purifiers-for-schools")}>Education</li>
                        <li onClick={() => navigate("/clinical-air-purifiers-hospital-air-purifier-by-mars-purifier")}>HealthCare</li>
                        <li onClick={() => navigate("/commercial-air-purifier-commercial-air-purification-by-mars-purifier")}>Business</li>
                        <li onClick={() => navigate("/mars-airpurifier-hospitality")}>Hospitality</li>
                        <li onClick={() => navigate("/air-purifiers-for-gyms-and-fitness-studios-mars-purifier")}>Gym and fitness studio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/water-purifire"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Water purifier
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faqs-mars-purifier-in-2023"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us-mars-purifier"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="right">
            <TbSearch className="scr" onClick={() => setSearchModal(true)} />
            <span className="cart-icon" onClick={() => setShowCart(true)} >
            <i class="fa-regular fa-cart-shopping"></i>
              {!!cartCount && <span className="count">{cartCount}</span>}
            </span>
          </div>
        </nav>
      </div>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
}

export default Navbar;
