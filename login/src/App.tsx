import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

import RequireAuth from "./components/RequireAuth";
import Login from "./components/Login";

import Product from "pdp/Product";
import Home from "home/Home";
import Cart from "cart/Cart";

import "home/styles";
import "./index.css";

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />

        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Product />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
