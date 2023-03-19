import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import Movies from "./pages/Movies";

const AppRouter = () => {
  const AuthenticatedRoute = ({ children }) => {
    const isAuthenticated = true;
    if (isAuthenticated) return children;
    return <Navigate to="/" />;
  };

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/home"
            element={
              <npm >
                <HomePage />
              </npm>
            }
          />
          <Route
            path="/movies"
            element={
              <AuthenticatedRoute>
                <Movies />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <AuthenticatedRoute>
                <>
                  <h1>Customers Component</h1>
                </>
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/diagrams"
            element={
              <AuthenticatedRoute>
                <>
                  <h1>Diagrams Component</h1>
                </>
              </AuthenticatedRoute>
            }
          />

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
