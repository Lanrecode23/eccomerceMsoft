import { useParams } from "react-router-dom";
import "../style/singleprod.css";
import { toproduct } from "../Data";
import { useSelector, useDispatch } from "react-redux";

function SingleProduct() {
  // us the useparams to 
  const { id } = useParams();
  const product = toproduct.find((item) => item.id.toString() === id);

  // Get the item in the cart in the cart reducer
  const myCart = useSelector((store) => store.cartReducer);
  const ourCart = myCart.cart;

 // check if the item is already in the cart
  const isInCart = (productId) => {
    return ourCart.find((item) => item.id === productId);
  };

  const dispatch = useDispatch();

  // add item to the cart
  const addCart = (productId) => {
    const product = toproduct.find((item) => item.id === productId);
    if (product) {
      dispatch({ type: "ADD_CART", payload: product });
    }
  };

  return (
    <div>
      {product && (
        <div>
          <h3 className="prod">Product Details</h3>
          <div className="product">
            <img
              src={product.image}
              style={{ width: "300px" }}
              alt={product.thumbnail} 
              className="image"
            />
            <div className="productDetails">
              <h4>{product.description}</h4>
              <h2>${product.price}</h2>
              {isInCart(product.id) ? (
                <button disabled onClick={() => addCart(product.id)} className="btn btn-warning bee">
                  Added To Cart
                </button>
              ) : (
                <button onClick={() => addCart(product.id)} className="btn btn-warning bee">Add To Cart</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
