import React, { useEffect, useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/mars-logo.png";
import NavLinks from "./NavLinks";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import Search from "../Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import "./Navbar.scss"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
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

    <nav className="bg-white">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 md:p-0 md:w-auto w-full flex justify-between p-8">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-12" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-3 font-[Roboto Condensed]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
        <div className="right-msag">
            <TbSearch className="scr" onClick={() => setSearchModal(true)} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span className="count">{cartCount}</span>}
            </span>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
          </div>
        </ul>
      </div>
    </nav>
    {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Navbar;
