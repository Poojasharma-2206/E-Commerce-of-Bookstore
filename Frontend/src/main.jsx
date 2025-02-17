import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Shop from "./Components/shop/Shop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Singlebook from "./Components/SingleBook/Singlebook";

import DashboardLayout from "./DashBoard/DashboardLayout";
import Dashboard from "./DashBoard/Dashboard";
import UploadBook from "./DashBoard/UploadBook";
import ManageBook from "./DashBoard/ManageBook";
import EditBook from "./DashBoard/EditBook";
import AuthProvider from "./Contacts/AuthProvider";
import Signup from "./Components/Signup_Login/Signup";
import Login from "./Components/Signup_Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Logout from "./Components/Signup_Login/Logout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes with Navbar */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-book/:id" element={<Singlebook />} />
      </Route>

      {/* Dashboard Routes (Without Navbar) */}
      <Route path="/admin/dashboard" element={<DashboardLayout />}>
        <Route index element= {<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="upload" element={<UploadBook />} />
        <Route path="manage" element={<ManageBook />} />
        <Route path="editBook/:id" element={<EditBook />} />
      </Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="logout" element={<Logout/>}></Route>


    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
