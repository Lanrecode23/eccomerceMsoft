import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import About from './Pages/About';
import Home from './Pages/Home';
import SingleProduct from './Components/SingleProduct';
import Notfound from './Components/Notfound';
import Toproduct from './Components/Toproduct';
import FilterProducts from './Components/FilterProducts';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Components/reducers/rootReducer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Searchproducts from './Components/Searchproducts';
import Shop from './Components/Shop';
import Contact from './Pages/Contact';

function App() {
  const store = createStore(rootReducer);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes> {/* Use Routes component instead of useRoutes hook */}
          <Route path='/top' element={<Toproduct />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/category/:category" element={<FilterProducts />} />
          <Route path="/search" element={<Searchproducts />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route  path="/" element={<Home />}/>
          <Route path='*' element={<Notfound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
