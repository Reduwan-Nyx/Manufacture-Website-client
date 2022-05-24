import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import MyProtfolio from "./Pages/MyProtfolio/MyProtfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboad from "./Pages/Dashboard/Dashboad";
import MyPurchase from "./Pages/Dashboard/MyPurchase";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";


function App() {
  return (
    <div className="app">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="pruchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />

        <Route
          path="dashboad"
          element={
            <RequireAuth>
              <Dashboad />
            </RequireAuth>
          }
        >
          <Route index element={<MyPurchase></MyPurchase>}></Route>
          <Route path="review" element={<MyReview></MyReview>}>
            </Route> <Route path="myprofile" element={<MyProfile></MyProfile>}>
            </Route> <Route path="users" element={<RequireAdmin>
              <Users></Users>
            </RequireAdmin>}></Route> 
        </Route>

        <Route path="protfolio" element={<MyProtfolio />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
