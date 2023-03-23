import React from "react";
import {BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import Movies from "./pages/Movies";

const AppRouter = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<><h1>Customers Component</h1></>} />
          <Route path="/diagrams" element={<><h1>Diagrams Component</h1></>} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRouter;
