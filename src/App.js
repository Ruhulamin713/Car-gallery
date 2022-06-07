import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./component/Shared/Footer/Footer.jsx";
import Login from "./component/Login/Login.jsx";
import SignUp from "./component/Signup/Signup.jsx";
import Blog from "./component/Blog/Blog";
import Inventory from "./component/Inventory/Inventory";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import ManageItems from "./component/MangeItems/ManageItems";
import AddItems from "./component/AddItems/AddItems";
import MyItems from "./component/MyItems/MyItems";
import Error from "./component/Error/Error";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory/:productId"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/manageitem"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        />
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
