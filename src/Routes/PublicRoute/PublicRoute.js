import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Declinetab from "../../Pages/Home/Declinetab";
import Livetab from "../../Pages/Home/Livetab";
import Approvetab from "../../Pages/Home/Approvetab";

import Login from "../../Pages/Login/Login";
const PublicRoute = (props) => {

  return (
    <>

      <Routes>
        <Route path={`/declined`} element={<Declinetab />}></Route>
        <Route path={`/approved`} element={<Approvetab />}></Route>
        <Route path={`/`} element={<Livetab />}></Route>
        <Route path={`/login`} element={<Login />}></Route>

      </Routes>
    </>
  );
};


export default PublicRoute;