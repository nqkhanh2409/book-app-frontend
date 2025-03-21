import { Routes, Route } from "react-router";

import PrivateRoute from "./PrivateRoute";
import AdminLogin from "../components/AdminLogin";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/home/Home";
import About from "../pages/About";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";
import SingleBook from "../pages/books/SingleBook";
import Order from "../pages/books/Order";
import AdminRoute from "./AdminRoute";
import { LayoutGuest } from "../pages/layout/LayoutGuest";
import { LayoutAdmin } from "../pages/layout/LayoutAdmin";
import { DashboardAdmin } from "../pages/dashboard/DashboardAdmin";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import EditBook from "../pages/dashboard/editBook/EditBook";

export default function Router() {
  return (
    <Routes>
      <Route element={<LayoutGuest />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books/:id" element={<SingleBook />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="admin" element={<AdminLogin />} />

      <Route path="dashboard" element={<LayoutAdmin />}>
        <Route
          index
          element={
            <AdminRoute>
              <DashboardAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="manage-books"
          element={
            <AdminRoute>
              <ManageBooks />
            </AdminRoute>
          }
        />
        <Route
          path="add-new-book"
          element={
            <AdminRoute>
              <AddBook />
            </AdminRoute>
          }
        />
        <Route
          path="edit-book/:id"
          element={
            <AdminRoute>
              <EditBook />
            </AdminRoute>
          }
        />
      </Route>
    </Routes>
  );
}
