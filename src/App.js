import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ShopLayout from "./Components/ShopLayout";
import UsersList from "./Components/users/UsersList.jsx"
import PostsList from "./Components/posts/PostsList.jsx"
import ProductsList from "./Components/products/ProductsList.jsx"
import ProductDetails from "./Components/products/ProductDetails.jsx"
import AddNewProduct from "./Components/products/AddNewProduct.jsx"
import Cart from "./Components/products/Cart.jsx"
import Home from "./Components/home/Home.jsx"


function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} / >
        <Route path="users" element={<UsersList />}/>
        <Route path="posts" element={<PostsList />} />
        <Route path="products" element={<ShopLayout/>} >
          <Route index element={<ProductsList />} />
          <Route path=":productId" element={<ProductDetails />}/ >
          <Route path="add-product" element={<AddNewProduct />}/ >
          <Route path="cart" element={<Cart />}/ >
        </Route >
      </Route>
    </Routes>
  );
}

export default App;
