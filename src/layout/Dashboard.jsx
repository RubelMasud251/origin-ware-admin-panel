import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import Sidebar from "../shared/Sidebar/Sidebar";
import Home from "../pages/home/Home";
import Orders from "../pages/Orders/Orders";
import Drafts from "../pages/Orders/Drafts";
import Products from "../pages/products/Products";
import Collections from "../pages/products/Collections";
import Inventory from "../pages/products/Inventory";
import Customers from "../pages/customers/Customers";
import Segments from "../pages/customers/Segments";
import Analytics from "../pages/analytics/Analytics";
import Marketing from "../pages/marketing/Marketing";
import Discounts from "../pages/discounts/Discounts";
import BlogPosts from "../pages/online-store/BlogPosts";
import Pages from "../pages/online-store/Pages";
import Navigation from "../pages/online-store/Navigation";
import PointOfSale from "../pages/point-sale/PointOfSale";
import Staff from "../pages/point-sale/Staff";
import Settings from "../pages/settings/Settings";

const Dashboard = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/discounts" element={<Discounts />} />
          <Route path="/blog-posts" element={<BlogPosts />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/point-sale" element={<PointOfSale />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Dashboard;
