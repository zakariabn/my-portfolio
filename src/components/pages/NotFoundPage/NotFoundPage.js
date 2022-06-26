import {
  faArrowLeft,
  faArrowRotateBack,
  faTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../../asset/Images/404-page-bg.jpg";
import "./not-found-page.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function handelGoBack() {
    window.history.go(-1);
  }

  return (
    <div className="w-full h-[92.9vh] flex flex-col gap-6 justify-center items-center custom-css">
      <h1 className=" flex flex-col">
        <span className="text-xl font-medium text-primary_shade">404</span>
        <span className="text-5xl font-bold">
          Page <span className="text-primary_shade">Not</span> Found
        </span>
      </h1>

      <div className="flex flex-col items-center">
        <h4 className="text-2xl">Are you lost ?</h4>

        <button
          onClick={handelGoBack}
          className="mt-2 ml-3 px-2 py-0.5 text-black border border-primary transition duration-300 custom-hover-effect">
          <span className="pl-4">Go Back</span>
          <sup>
            <FontAwesomeIcon
              icon={faTurnUp}
              className="text-primary_shade ml-2 -rotate-90 go-back-hover-effect"
            />
          </sup>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
