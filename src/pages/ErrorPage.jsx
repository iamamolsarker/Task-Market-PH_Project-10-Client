import React from "react";
import errorImg from "../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src={errorImg} alt="" className="w-1/2"/>
    </div>
  );
};

export default ErrorPage;
