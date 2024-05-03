import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About"
// import Contact from "./components/Contact"
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Seller from "./components/Seller";
import SellerProfile from "./components/SellerProfile";
import ProtectedRoute from "./utils/ProtectedRoute";
import SellerProfileDetails from "./components/SellerProfileDetails";
import SellerAddProduct from "./components/SellerAddProduct";
import SellerProfileAnalytics from "./components/SellerProfileAnalytics";
import SellerProfileDashboard from "./components/SellerProfileDashboard";
// Functional Component starts with Capital letter

// Implementing Lazy loading
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppMain = () => {
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppMain />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Body /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/seller",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Seller />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      { path: "/products/:prodId", element: <ProductDetail /> },
    ],
  },
  {
    path: "/sellerprofile/:id/",
    element: <ProtectedRoute RoutingComponent={SellerProfile} />,
    children: [
      { path: "", element: <SellerProfileDashboard /> },
      { path: "dashboard", element: <SellerProfileDashboard /> },
      { path: "sellerdetail", element: <SellerProfileDetails /> },
      { path: "addproduct", element: <SellerAddProduct /> },
      { path: "analytics", element: <SellerProfileAnalytics /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
