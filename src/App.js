import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import EditProduct from './components/EditProduct';
import Explore from './components/Explore';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={() => <Explore />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/edit/:id" Component={() => <EditProduct />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
