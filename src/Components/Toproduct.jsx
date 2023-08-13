import React, { useEffect, useState } from "react";
import { toproduct } from "../Data";
import "../style/toproduct.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Toproduct() {
  const [Data, setData] = useState(toproduct);

  const filterResult = (data) => {
    const result = toproduct.filter((product) => {
      return product.category === data;
    });

    setData(result);
  };

  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;

  // check if the item is already in our cart
  const isInCart = (productId) => {
    return ourCart.find((item) => item.id === productId);
  };

  const dispatch = useDispatch();

  // set the cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ourCart));
  }, [ourCart]);

  // add item to the cart
  const addCart = (productId) => {
    const product = toproduct.find((item) => item.id === productId);
    if (product) {
      dispatch({ type: "ADD_CART", payload: product });
    }
  };

  return (
    <div>
      <div className="py-3 py-md-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4">Top Products</h4>
            </div>
            {toproduct.slice(0,8).map((product) => (
              <div className="col-md-6 col-lg-3" key={product.id}>
                <div
                  className="product-card"
                  style={{ margin: "1em auto" }}
                  data-aos="zoom-in"
                >
                  <div className="product-card-img">
                    <label className="stock bg-success">In Stock</label>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: "14rem" }}
                    />
                  </div>
                  <div className="product-card-body">
                    <p className="product-brand">{product.title}</p>
                    <h5 className="product-name">
                      <a href="/">{product.category}</a>
                    </h5>
                    <div>
                      <span className="selling-price">${product.price}</span>
                      <span className="original-price">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="mt-2">
                      {isInCart(product.id) ? (
                        <button
                          className="btn btn1"
                          disabled
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn1"
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      )}
                      <Link
                        to={`${`product/${product.id}`}`}
                        className="btn btn1"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="offer_content">
            <h3 className="text-uppercase mb-40 funda">all men’s collection</h3>
            <h2 className="text-uppercase funda" style={{ color: "green" }}>
              20% off
            </h2>
            <NavLink
              to="/category/men's clothing"
              onClick={() => filterResult("men's clothing")}
            >
              <button className="main_btn mb-20 mt-1 btn btn-primary">
                Discover Now
              </button>
            </NavLink>
            <p>Limited Time Offer</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4 name">Trending Products</h4>
            </div>
            {toproduct.slice(30, 36).map((product) => (
              <div className="col-md-6 col-lg-3" key={product.id}>
                <div
                  className="product-card"
                  style={{ margin: "1em auto" }}
                  data-aos="zoom-in"
                >
                  <div className="product-card-img">
                    <label className="stock bg-success">In Stock</label>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: "14rem" }}
                    />
                  </div>
                  <div className="product-card-body">
                    <p className="product-brand">{product.title}</p>
                    <h5 className="product-name">
                      <a href="i">{product.category}</a>
                    </h5>
                    <div>
                      <span className="selling-price">${product.price}</span>
                      <span className="original-price">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="mt-2">
                      {isInCart(product.id) ? (
                        <button
                          className="btn btn1"
                          disabled
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn1"
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      )}
                      <Link
                        to={`${`product/${product.id}`}`}
                        className="btn btn1"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4 name">Latest Products</h4>
            </div>
            {toproduct.slice(11, 20).map((product) => (
              <div className="col-md-6 col-lg-3" key={product.id}>
                <div
                  className="product-card"
                  style={{ margin: "1em auto" }}
                  data-aos="zoom-in"
                >
                  <div className="product-card-img">
                    <label className="stock bg-success">In Stock</label>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: "14rem" }}
                    />
                  </div>
                  <div className="product-card-body">
                    <p className="product-brand">{product.title}</p>
                    <h5 className="product-name">
                      <a href="/">{product.category}</a>
                    </h5>
                    <div>
                      <span className="selling-price">${product.price}</span>
                      <span className="original-price">
                        ${product.originalPrice}
                      </span>
                    </div>
                    <div className="mt-2">
                      {isInCart(product.id) ? (
                        <button
                          className="btn btn1"
                          disabled
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button
                          className="btn btn1"
                          onClick={() => addCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      )}
                      <Link
                        to={`${`product/${product.id}`}`}
                        className="btn btn1"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toproduct;
