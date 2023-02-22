import React, { useEffect } from "react";
import PublicRoute from "./Routes/PublicRoute/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";
import LoaderComponent from "./Components/LoaderCompoent/LoaderCompoent";
import { useDispatch, useSelector } from "react-redux";
import { connectUsingWallet } from "./redux/actions/connect.action";
import { history } from "./redux/reducers/history";

const Application = () => {
  //use dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    onInit();
  }, []);

  //get user wallet address from redux
  const user = useSelector((state) => state.user.walletAddress ? state.user : false);

  //function onInit
  const onInit = async () => {
    if (user !== false) {
      await dispatch(connectUsingWallet(user?.wallet));
    }
  };


  return (
    <Router history={history} >
      <LoaderComponent />
      <PrivateRoute path={`/auth`} component={PrivateRoute} />
      <PublicRoute path={`/`} component={PublicRoute} />

    </Router>
  );
};

export default Application;
