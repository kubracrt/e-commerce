import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Header from "./components/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";
import User from "./pages/User";
import NewUser from "./components/User/NewUser";
import RegisteredUser from "./components/User/RegisteredUser";
import { Admin } from "./pages/Admin";
import EditUser from "./components/admin.jsx/Users/EditUser";
import Products from "./components/Home/Products";
import Search from "./pages/Search";
import Category_id from "./components/Category/Category_id";
import Category from "./components/Category/Category";
import Carts from "./pages/Carts";
import DetailComp from "./components/Detail/DetailComp";
import Detail from "./pages/Detail";
import UserAdmin from "./components/admin.jsx/Users/UserAdmin";
import { QuestionAnswer } from "./components/admin.jsx/Questions/QuestionAnswer";
import AdminComp from "./components/admin.jsx/AdminComp";
import Answer from "./components/admin.jsx/Questions/Answer";
import Customer from "./pages/Customer";
import PastOrder from "./pages/PastOrder";
import AdminProducts from "./components/admin.jsx/Products/AdminProducts";
import EditProducts from "./components/admin.jsx/Products/EditProducts";
import AddProducts from "./components/admin.jsx/Products/AddProducts";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carts" element={<Carts />} />
            <Route path="/Users" element={<User />} />
            <Route path="/NewUser" element={<NewUser />} />
            <Route path="/RegisteredUser" element={<RegisteredUser />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Edituser/:id" element={<EditUser />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:id" element={<Detail />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Category/:id" element={<Category_id />} />
            <Route path="/UserAdmin" element={<UserAdmin />} />
            <Route path="/QuestionAnswer" element={<QuestionAnswer />} />
            <Route path="/AdminComp" element={<AdminComp />} />
            <Route path="/Answer/:id" element={<Answer />} />
            <Route path="/Account" element={<User />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/PastOrder" element={<PastOrder />} />
            <Route path="/AdminProduct" element={<AdminProducts />} />
            <Route path="/EditProduct/:id" element={<EditProducts />} />
            <Route path="/AddProducts" element={<AddProducts />} />
          </Routes>
          <Footer />
        </PageContainer>
      </Router>
    </div>
  );
}

export default App;
