import {
  faCheck,
  faDiagramSuccessor,
  faDonate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const EmailSend = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-[60vh] flex-center flex-col">
      <h1 className="text-4xl text-primary font-bold">Thank you</h1>
      <div className="mt-8 text-center">
        <span className="inline-flex gap-2">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-white bg-green-700 rounded-full p-0.5"
          />
          <p className="">I got a email from you.</p>
        </span>
        <p className="border border-green-400 mt-2 px-4 py-1">
          I Will contact with you as soon as possible.
        </p>

        {/* home redirect button */}
        <button
          className="button text-black mt-5 rounded-full hover:bg-primary hover:font-medium duration-200"
          onClick={() => navigate("/", {replace: true})}>
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default EmailSend;
