/*!

=========================================================
* Paper Kit PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AddProduct from "views/examples/AddProduct.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error404 from "views/examples/Error404.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Settings from "views/examples/Settings.js";
import ResetPass from "views/examples/ResetPass";
import ChangePass from "views/examples/ChangePass";
import ProductManagement from "views/examples/ProductManagement";
import EditProduct from "views/examples/EditProduct";
import ViewProduct from "views/examples/ViewProduct";
import VendorManagement from "views/examples/VendorManagement";
import EditVendor from "views/examples/EditVendor";
import ViewVendor from "views/examples/ViewVendor";
import BrandManagement from "views/examples/BrandManagement";
import EditBrand from "views/examples/EditBrand";
import ViewBrand from "views/examples/ViewBrand";
import DriverManagement from "views/examples/DriverManagement";
import EditDriver from "views/examples/EditDriver";
import ViewDriver from "views/examples/ViewDriver";
import CustomerManagement from "views/examples/CustomerManagement";
import ViewCustomer from "views/examples/ViewCustomer";
import OrdersManagement from "views/examples/OrdersManagement";
import EditOrder from "views/examples/EditOrder";
import ViewOrder from "views/examples/ViewOrder";
import ViewPurchase from "views/examples/ViewPurchase";
import CategoryManagement from "views/examples/CategoryManagement";
import EditCategory from "views/examples/EditCategory";
import ViewCategory from "views/examples/ViewCategory";
import ShoppingCart from "views/examples/ShoppingCart";
import OrderFinal from "views/examples/OrderFinal";
import PurchaseManagement from "views/examples/PurchaseManagement";
import EditPurchase from "views/examples/EditPurchase";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/add-product"
        render={(props) => <AddProduct {...props} />}
      />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
      <Route path="/error-404" render={(props) => <Error404 {...props} />} />
      <Route path="/error-422" render={(props) => <Error422 {...props} />} />
      <Route path="/error-500" render={(props) => <Error500 {...props} />} />

      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />

      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route path="/reset-pass" render={(props) => <ResetPass {...props} />} />
      <Route
        path="/change-pass"
        render={(props) => <ChangePass {...props} />}
      />

      <Route
        path="/shopping-cart"
        render={(props) => <ShoppingCart {...props} />}
      />
      <Route path="/settings" render={(props) => <Settings {...props} />} />
      <Route
        path="/edit-product"
        render={(props) => <EditProduct {...props} />}
      />
      <Route
        path="/edit-purchase"
        render={(props) => <EditPurchase {...props} />}
      />
      <Route
        path="/edit-category/:categoryId"
        render={(props) => <EditCategory {...props} />}
      />
      <Route
        path="/edit-vendor"
        render={(props) => <EditVendor {...props} />}
      />
      <Route path="/edit-brand/:brandId" render={(props) => <EditBrand {...props} />} />
      <Route
        path="/edit-driver"
        render={(props) => <EditDriver {...props} />}
      />
      <Route path="/edit-order" render={(props) => <EditOrder {...props} />} />
      <Route
        path="/view-product"
        render={(props) => <ViewProduct {...props} />}
      />
      <Route
        path="/view-vendor"
        render={(props) => <ViewVendor {...props} />}
      />
      <Route path="/view-brand/:brandId" render={(props) => <ViewBrand {...props} />} />
      <Route
        path="/view-driver"
        render={(props) => <ViewDriver {...props} />}
      />
      <Route
        path="/view-customer"
        render={(props) => <ViewCustomer {...props} />}
      />
      <Route path="/view-order" render={(props) => <ViewOrder {...props} />} />
      <Route
        path="/view-purchase"
        render={(props) => <ViewPurchase {...props} />}
      />
      <Route
        path="/view-category/:categoryId"
        render={(props) => <ViewCategory {...props} />}
      />
      <Route
        path="/product-management"
        render={(props) => <ProductManagement {...props} />}
      />
      <Route
        path="/vendor-management"
        render={(props) => <VendorManagement {...props} />}
      />
      <Route
        path="/brand-management"
        render={(props) => <BrandManagement {...props} />}
      />
      <Route
        path="/driver-management"
        render={(props) => <DriverManagement {...props} />}
      />
      <Route
        path="/customer-management"
        render={(props) => <CustomerManagement {...props} />}
      />
      <Route
        path="/orders-management"
        render={(props) => <OrdersManagement {...props} />}
      />
      <Route
        path="/category-management"
        render={(props) => <CategoryManagement {...props} />}
      />
      <Route
        path="/purchase-management"
        render={(props) => <PurchaseManagement {...props} />}
      />
      <Route
        path="/order-final"
        render={(props) => <OrderFinal {...props} />}
      />

      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
