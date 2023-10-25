import React from "react";
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { CustomerService } from "./views/CustomerService/CustomerService";
import { News } from "./views/News/News";
import { Store } from "./views/Store/Store";
import { Home } from "./views/Home/Home";
import { Woman } from "views/Woman/Woman";
import { ItemsLayout } from "./Layouts/ItemsLayout/ItemsLayout"
import { Male } from "./views/Male/Male";
import { MainLayout } from "./Layouts/MainLayout/MainLayout"
import { Kids } from "./views/Kids/Kids";
import { Baby } from "./views/Baby/Baby";
import { ProductPage } from "./views/ProductPage/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="customer-service" element={<CustomerService />} />
        <Route path="fashion-news" element={<News />} />
        <Route path="store" element={<Store />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="items" element={<ItemsLayout />}>
          <Route path="woman" element={<Woman />} />
          <Route path="man" element={<Male />} />
          <Route path="kids" element={< Kids />} />
          <Route path="baby" element={< Baby />} />
        </Route>
      </Route>
    </Routes >
  )
};

export default App;