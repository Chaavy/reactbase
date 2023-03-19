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
    // <Switch>
    //     <Route exact path="/">
    //         <HomePage />
    //     </Route>
    //     <Route exact path="/movies">
    //         <Movies/>
    //     </Route>
    //     <Route exact path="/customers">
    //         <h1>Customers Page</h1>
    //     </Route>
    //     <Route exact path="/diagrams">
    //         <h1>Diagrams Page</h1>
    //     </Route>
    // </Switch>
  );
};

export default AppRouter;
