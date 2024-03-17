import React, { useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./conponent/Home/Home.jsx";
import Layout from "./conponent/Layout/Layout.jsx";
import Categories from "./conponent/Categories/Categories.jsx";
import Cart from "./conponent/Cart/Cart.jsx";
import Login from "./conponent/Login/Login.jsx";
import Register from "./conponent/Register/Register.jsx";
import { AuthContextProvider } from "./Contexts/AuthContext/AuthContext.js";
import ProtectedRoute from "./conponent/ProtectedRoute/ProtectedRoute.jsx";
import AllProducts from "./conponent/AllProducts/AllProducts.jsx";
import Brands from "./conponent/Brands/Brands.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./conponent/ProductDetails/ProductDetails.jsx";
import CartContextProvider from "./Contexts/CartContext/CartContextProvider.js";
import { Toaster } from "react-hot-toast";
import WishContextProvider from "./Contexts/WishContext/WishContextProvider.js";
import WishList from "./conponent/WishList/WishList.jsx";
import Payment from "./conponent/Payment/Payment.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishList",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "/categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },

      {
        path: "/allProducts",
        element: (
          <ProtectedRoute>
            <AllProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default function App() {
  // const authContext = useContext(authContext);

  const myClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={myClient}>
        <AuthContextProvider>
          <CartContextProvider>
            <WishContextProvider>
              <RouterProvider router={myRouter}>
                <Home />
              </RouterProvider>
              <Toaster />
            </WishContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}