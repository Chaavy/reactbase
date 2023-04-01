import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

const Layout = ({ children }) => {
  const {validToken} = useSelector(state => state?.Authorization);
  return (
    <SLayout>
      {validToken && (
        <>
          <Sidebar />
        </>
      )}
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
