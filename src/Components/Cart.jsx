import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/cart.css";
import { Link, NavLink } from "react-router-dom";
import Notiflix from "notiflix";
import { toast } from "react-toastify";

function Cart() {
  // get the list of products that are available in the cart
  const dispatch = useDispatch();
  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;

  useEffect(() => {
    // calculate the total price
    const totalPrice = ourCart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    //set in the localstorage
    
    // dispatch action to set the total price
    dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
  }, [dispatch, ourCart]);

  // notiflix action to confirm
  const ConfirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Aribiti Confirm",
      "Are you sure you want to delete?",
      "Delete",
      "Cancel",
      function okCb() {
        deleteItem(id);
        toast.success("item deleted successfully");
      },
      function cancelCb() {},
      {
        autoClose: 1000,
        width: "320px",
        borderRadius: "8px",
        // etc...
      }
    );
  };
  // call back function to delete from cart
  const deleteItem = (id) => {
    dispatch({ type: "DELETE_CART", payload: { id } });
  };

  return (
    <>
      <div className="h3 funda">
        <h3>#Cart / </h3>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h3 className="hover"> Home </h3>
        </Link>
      </div>

      <div className="py-3 py-md-5 bg-light sti">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="shopping-cart">
                <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>Products</h4>
                    </div>
                    <div className="col-md-2">
                      <h4>Price</h4>
                    </div>
                    <div className="col-md-2">
                      <h4>Quantity</h4>
                    </div>
                    <div className="col-md-2">
                      <h4>Remove</h4>
                    </div>
                  </div>
                </div>
                {ourCart.length === 0 ? (
                  <div>
                    <h3
                      className="text-center funda mt-5"
                      style={{ color: "red" }}
                    >
                      The cart is empty
                    </h3>
                  </div>
                ) : (
                  ourCart.map((item) => {
                    //increaase cart
                    const increaseCart = (item) => {
                      // Ensure the quantity is a number before incrementing
                      const newQuantity = item.quantity ? item.quantity + 1 : 2;
                      dispatch({
                        type: "UPDATE_CART",
                        payload: { ...item, quantity: newQuantity },
                      });
                    };

                    const decreaseCart = (item) => {
                      // Ensure the quantity is a number and greater than 1 before decrementing
                      const newQuantity =
                        item.quantity > 1
                          ? item.quantity - 1
                          : 1;
                      dispatch({
                        type: "UPDATE_CART",
                        payload: { ...item, quantity: newQuantity },
                      });
                    };
                    return (
                      <div className="cart-item" key={item.id}>
                        <div className="row">
                          <div className="col-md-6 my-auto">
                            <label
                              className="product-name funda"
                              style={{ fontWeight: "lighter" }}
                            >
                              <img
                                src={item.image}
                                style={{ width: "50px", height: "50px" }}
                                alt={item.name}
                              />
                              {item.title.substring(0, 30) + "..."}
                            </label>
                          </div>
                          <div className="col-md-2 my-auto">
                            <label className="price">${item.price}</label>
                          </div>
                          <div className="col-md-2 col-7 my-auto">
                            <div className="quantity">
                              <div className="input-group">
                                <span className="btn btn1" onClick={() => decreaseCart(item)}>
                                  
                                  <i
                                    className="fa fa-minus"
                                    
                                  ></i>
                                 
                                  
                                </span>
                                <span style={{padding:'0 6px'}}>{item.quantity || 1}</span>
                                
                                <span className="btn btn1" onClick={() => increaseCart(item)}>
                              
                                  <i
                                    className="fa fa-plus"
                                    
                                  ></i>
                                </span>
                                
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2 col-5 my-auto">
                            <div className="remove">
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => ConfirmDelete(item.id)}
                              >
                                <i className="fa fa-trash"></i> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="col-md-12 mb-3 d-flex justify-content-end">
              <NavLink to="/checkout">
                <button className="mt-4 btn btn-primary">Checkout</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
