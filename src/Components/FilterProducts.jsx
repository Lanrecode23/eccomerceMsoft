import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toproduct } from '../Data';
import { useDispatch, useSelector } from 'react-redux'
import "../style/Hero.css";



function FilterProducts() {
  const { category } = useParams();

  const myCart = useSelector(store => store.cartReducer)
  const ourCart = myCart.cart

  const isInCart = (productId) => {
    return ourCart.find((item) => item.id === productId);
  };

  const dispatch = useDispatch()

  // add item to the cart 
  const addCart = (productId) => {
    const product = toproduct.find((item) => item.id === productId);
    if (product) {
      dispatch({ type: 'ADD_CART', payload: product });
    }
  };
  
  // Filter the products based on the category parameter
  const products = toproduct.filter((product) => {
    return product.category === category;
  });

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          {products.map((product) => (
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
                      </button>) :
                      (<button className="btn btn1" onClick={() => addCart(product.id)}>
                        Add To Cart
                      </button>)
                    }
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
      </div>
    </>
  );
}

export default FilterProducts;
