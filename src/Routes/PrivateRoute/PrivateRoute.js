import React from "react";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "../../Pages/Admin/Dashboard/Dashboard";
import Setting from '../../Pages/Admin/Setting/Setting';

const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route path={`/auth/dashboard`} element={<Dashboard />}></Route>
        <Route path={`/auth/setting`} element={<Setting />}></Route>

      </Routes>
    </>
  );
};

export default PrivateRoute;
