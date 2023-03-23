import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
  const isAuthenticated = false;
  return (
    <SLayout>
      {isAuthenticated && (
        <>
          <Sidebar />
        </>
      )}
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
