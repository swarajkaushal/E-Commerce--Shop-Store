import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPannel from "../Admin/AdminPannel";




const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AdminPannel />}></Route>
        {/* <Route path="/" element={<Admin />}></Route> */}
        {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
      </Routes>
    </div>
  );
};

export default AdminRouters;
