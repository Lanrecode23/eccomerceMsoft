import React, { useState } from "react";
import { toproduct } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Shop() {
  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;

  //check if the item in the cart 
  const isInCart = (productId) => {
    return ourCart.find((item) => item.id === productId);
  };

  const dispatch = useDispatch();

  // using pagnation
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

 // function to add item to cart
  const addCart = (productId) => {
    const product = toproduct.find((item) => item.id === productId);
    if (product) {
      dispatch({ type: "ADD_CART", payload: product });
    }
  };

  // function that handle the next button
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  //function that handle the previous button
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = toproduct.slice(startIndex, endIndex);
  const isLastPage = endIndex >= toproduct.length;

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          {paginatedProducts.map((product) => (
            <div className="col-md-6 col-lg-3" key={product.id}>
              <div
                className="product-card"
                style={{ margin: "1em auto" }}
                
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
                    <Link to={`/product/${product.id}`} className="btn btn1">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination-buttons mb-4 text-center">
        {currentPage > 1 && (
          <button className="btn btn-danger" onClick={handlePrevPage}
          style={{marginRight:'0.9em'}}>
            Previous
          </button>
        )}
        {paginatedProducts.length === itemsPerPage && !isLastPage && (
          <button className="btn btn-primary" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Shop;
