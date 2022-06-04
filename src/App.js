import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/contectus";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* ye route ekh trh ka rasta hota hai or jbh v koi link work krta hai toh voh chech krta hai ki 
koi route hai matching ager hai toh voh link usi k according page pr send krta hai hme 
as :id ekh variable ki trh hai jbh v <link> dekhega ki route is variable s kuch match krta hai toh
use respective page pr bej dega hme
:id wala is more imp  paramerters joh v bhejoge vhi pachune wale page koh milegi

products page m joh v /:( value   ) hogi product page m voh para m kuch 
{id = value }  ager route m id ki jghh ids likh d toh 
{ids: value } usepara m ayegi




*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/products/:id/:item" element={<Product />} />
        <Route path="/product/*" element={<Product />} />
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
