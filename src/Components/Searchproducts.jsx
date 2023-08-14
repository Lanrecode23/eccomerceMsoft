import React, { useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import { toproduct } from "../Data";
import { useDispatch, useSelector } from "react-redux";


function Searchproducts() {

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
  //get the url location
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const filterProduct = toproduct.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
    <div className="container mt-5 mb-5">
      {filterProduct.length === 0 ? (
        <h4 className="text-center" style={{margin:'8em auto', color:'red'}}>No product found.</h4>
      ) : (
        <div className="row">
          {filterProduct.map((product) => (
            <div className="col-md-6 col-lg-3" key={product.id}>
              <div className="product-card" style={{ margin: '1em auto' }} >
                <div className="product-card-img">
                  <label className="stock bg-success">In Stock</label>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ height: '14rem' }}
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
                      <button className="btn btn1" disabled onClick={() => addCart(product.id)}>
                        Add To Cart
                      </button>
                    ) : (
                      <button className="btn btn1" onClick={() => addCart(product.id)}>
                        Add To Cart
                      </button>
                    )}
                    <Link
                      to={`/product/${product.id}`}
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
      )}
    </div>
  </div>
);
}

export default Searchproducts;
