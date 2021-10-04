import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
  return (
    <Loader
      type="Circles"
      color="#9771f3"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
