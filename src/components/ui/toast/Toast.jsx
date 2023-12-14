import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoClose, IoCloseCircleOutline } from "react-icons/io5";

const Toast = ({ fn, toastClass }) => {
  return (
    <div
      data-testid="toast-dataid"
      className={`p-5 space-y-4 bg-green-600 w-72 sm:w-92 rounded-md text-white fixed top-2 ${toastClass} right-5 transition-all duration-1000 ease-in-out z-50`}
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="flex flex-row items-center gap-2 text-xl font-semibold ">
          <i className="text-2xl text-blue-200">
            <BsCheckCircle />
          </i>
          Flashcard is created.
        </h3>

        <i onClick={fn} className="text-2xl text-blue-200">
          <IoCloseCircleOutline />
        </i>
        {/* </button> */}
      </div>
      {/* <div className="text-right">
        <button
          type="button"
          onClick={fn}
          className="font-semibold rounded-md px-4 py-1 text-blue-200 min-w-max hover:bg-blue-700 border-2 border-blue-300 transition-all hover:border-blue-700 active:animate-ping"
        >
          Dismiss
        </button>
      </div> */}
    </div>
  );
};

export default Toast;
