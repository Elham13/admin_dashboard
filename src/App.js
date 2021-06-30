import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./screens/home/Home";
import UserList from "./screens/userList/UserList";
import User from "./screens/user/User";
import NewUser from "./screens/newUser/NewUser";
import ProductList from "./screens/productList/ProductList";
import Product from "./screens/product/Product";
import NewProduct from "./screens/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:userId" component={Product} />
          <Route path="/newProduct" component={NewProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
