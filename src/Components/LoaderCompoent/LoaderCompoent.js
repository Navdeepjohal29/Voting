import React from "react";
import { useSelector } from "react-redux";
import "./style.scss"
import {Oval} from "react-loader-spinner";

function LoaderComponent() {
  const { isLoading } = useSelector((state) => state.loader);
  if (isLoading) {
    return (
      <div className="overlayloader">
       	<Oval color="#fff" height={80} width={80} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default LoaderComponent;