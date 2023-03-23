import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/Login/LoginPage";
import Movies from "./pages/Movies";

const AppRouter = () => {
  const AuthenticatedRoute = ({ children }) => {
    const isAuthenticated = false;
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
              <AuthenticatedRoute >
                <HomePage />
              </AuthenticatedRoute>
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

        <Route path="/*" element={<h1>ESTA PAGINA NO EXISTE</h1>} />
        </Routes>
      </Layout>
    </>
  );
};

export default AppRouter;
