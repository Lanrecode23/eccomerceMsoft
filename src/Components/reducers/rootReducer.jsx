import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import totalPriceReducer from "./priceReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  priceReducer: totalPriceReducer,
  authReducer: authReducer,
});

export default rootReducer;
