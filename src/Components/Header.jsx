import React, { useEffect, useState } from "react";
import "../style/header.css";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { toproduct } from "../Data";
import authReducer from "./reducers/authReducer";
import Notiflix from "notiflix";

function Header() {
  // get the isLogged properties from the authReducer
  const isLoggedIn = useSelector((store) => store.authReducer.isLoggedIn);

  //use state to handle the scroll fixed
  const[isScroll,setScroll] = useState(false)
  // function to handle scroll effect
  const handleScroll = () => {
    if(window.scrollY > 0){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  // useEffect to handle scroll effect
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[]);


  const dispatch = useDispatch();

  const handleLogout = () => {
    Notiflix.Confirm.show(
      "Aribiti Confirm",
      "Are you sure you want to logout?",
      "Yes",
      "No",
      function okCb() {
        dispatch({ type: "LOGOUT", payload: authReducer });
        localStorage.removeItem("name");
        localStorage.removeItem("isLoggedIn");
      },
      function cancelCb() {
        dispatch({ type: "LOGIN", payload: authReducer });
      },
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  // search query
  const [searchQuery, setSearchQuery] = useState("");
  //use navigate to redirect
  const navigate = useNavigate();
  // function to handle the search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const myCart = useSelector((store) => store.cartReducer);
  const [Data, setData] = useState(toproduct);

  // function to filter the product based on the category
  const filterResult = (data) => {
    const result = toproduct.filter((product) => {
      return product.category === data;
    });

    setData(result);
  };

  // get the username from the local storage
  const name = localStorage.getItem("name");
  return (
    <div>
      <div className={isScroll ? "container-fluid bg-body-tertiary fixed p-2" : "container-fluid bg-body-tertiary p-2"}>
        <marquee behavior="scroll" direction="left" className='text-secondary funda  p-1'>
          🎉 Exciting News! Don't Miss Our Exclusive 𝗗𝗜𝗦𝗖𝗢𝗨𝗡𝗧 Event! 🛍️
          Ready for an incredible shopping experience? Look no further than [eccomerce-soft.vercel.app]. We're thrilled to announce a limited-time 𝗗𝗜𝗦𝗖𝗢𝗨𝗡𝗧 on all your favorite products!
          🌟 Here's what we have in store for you: 
          - 👔 Men's Clothing: Elevate your wardrobe with the latest trends in men's fashion.
          - 👗 Women's Clothing: Discover the perfect outfits for any occasion, from casual to chic.
          - 💍 Jewelry: Add a touch of elegance to your look with our stunning jewelry pieces.
          - 📱 Electronics: Stay connected and entertained with top-quality electronics.
          - 🛒 **And Much More!**
          This is your chance to shop quality products at unbeatable prices. Act fast! These deals won't last forever.
          📅 Save the dates: [september 6th] - [December 6th]  
          Don't miss out on this shopping extravaganza. Visit us now at [eccomerce-soft.vercel.app] and indulge in the 𝗗𝗜𝗦𝗖𝗢𝗨𝗡𝗧 of a lifetime! 🌍🛒💰
        </marquee>
      </div>
      <div className="first-navbar-container">
        <div className={isScroll?"main-navbar fixed shadow-sm" : "main-navbar shadow-sm"}>
          <div className="top-navbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 my-auto d-sm-none d-md-block d-lg-block logo">
                 <Link to='/'><img src="/images/logo-no-background.png" alt="" /></Link>
                </div>
                <div className="col-md-5 my-auto">
                  <form role="search" onSubmit={handleSubmit}>
                    <div className="input-group">
                      <input
                        type="search"
                        placeholder="Search your product"
                        className="form-control"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="btn bg-white" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-5 my-auto">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <Link to="/cart" className="nav-link">
                        <i className="fa fa-shopping-cart"></i> Cart{" "}
                        {myCart.cart.length}
                      </Link>
                    </li>

                    {/* Conditionally render the login/logout and register links */}
                    {!isLoggedIn ? (
                      <>
                        <li className="nav-item">
                          <NavLink to="/login" className="nav-link">
                            Login
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/register" className="nav-link">
                            Register
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <li className="nav-item">
                        <NavLink
                          to="/"
                          className="nav-link"
                          onClick={handleLogout}
                        >
                          Logout
                        </NavLink>
                      </li>
                    )}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-user"></i> Account
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/" className="dropdown-item">
                            <i className="fa fa-user"></i> {name}
                          </Link>
                        </li>
                        <li>
                          <Link to='/cart' className="dropdown-item">
                            <i className="fa fa-list"></i> My Orders
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart" className="dropdown-item">
                            <i className="fa fa-shopping-cart"></i> My Cart
                          </Link>
                        </li>
                        {!isLoggedIn ? (
                          <>
                            <li>
                              <Link to="/login" className="dropdown-item">
                                <i className="fa fa-sign-out"></i> Login
                              </Link>
                            </li>
                          </>
                        ) : (
                          <li>
                            <Link
                              to="/"
                              className="dropdown-item"
                              onClick={handleLogout}
                            >
                              <i className="fa fa-sign-out"></i> Logout
                            </Link>
                          </li>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary second-navbar"
      >
        <Container>
          <NavDropdown
            title="Categories"
            id="collasible-nav-dropdown"
            style={{ fontWeight: "bolder", fontSize: "22px" }}
            className="funda cated"
          >
            <NavDropdown.Item
              as={Link}
              to="/category/men's clothing"
              onClick={() => filterResult("men's clothing")}
              className="dropdown-item-custom"
            >
              men's clothing
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/women's clothing"
              onClick={() => filterResult("women's clothing")}
              className="dropdown-item-custom"
            >
              women's clothing
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/jewelery"
              onClick={() => filterResult("jewelery")}
              className="dropdown-item-custom"
            >
              jewelery
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/fragrances"
              onClick={() => filterResult("fragrances")}
              className="dropdown-item-custom"
            >
              fragrances
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/electronics"
              onClick={() => filterResult("electronics")}
              className="dropdown-item-custom"
            >
              electronics
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/skincare"
              onClick={() => filterResult("skincare")}
              className="dropdown-item-custom"
            >
              skincare
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/laptops"
              onClick={() => filterResult("laptops")}
              className="dropdown-item-custom"
            >
              laptops
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/smartphones"
              onClick={() => filterResult("smartphones")}
              className="dropdown-item-custom"
            >
              smartphones
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/category/shoes"
              onClick={() => filterResult("shoes")}
              className="dropdown-item-custom"
            >
              shoes
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink
                to="/"
                className="nav-link"
                activeclassname="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeclassname="active"
              >
                About
              </NavLink>
              <NavLink
                to="/shop"
                className="nav-link"
                activeclassname="active"
              >
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                activeclassname="active"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
