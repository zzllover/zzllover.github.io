import React, { useState } from "react";
import { Link } from "react-router-dom";
import Yundong from "@assets/yundong.png";
import Touxiang from "@assets/touxiang-11.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickJump = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="w-full top-0 shadow dark:bg-gray-800 bg-slate-300">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#" onClick={onClickJump}>
              <img className="w-auto h-6 sm:h-7" src={Yundong} alt="" />
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen((c) => !c)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          isOpen
            ? "absolute w-full h-full z-40 transition-all duration-300 ease-in-out transform top-0  translate-x-0 "
            : "absolute w-full h-full z-40 transition-all duration-300 ease-in-out transform top-0 -translate-x-full"
        }
      >
        <div
          className="bg-gray-800 opacity-50 w-full h-full"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
          <div className="h-full w-64 p-3 flex flex-col md:flex-row md:mx-6">
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <div className="mt-2 mb-4 flex w-full items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <img
                        src={Yundong}
                        alt="logo"
                        className="w-auto h-7 sm:h-7"
                      />
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base md:text-2xl text-gray-800 ml-3"
                      >
                        运动节拍器
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  onClick={onClickJump}
                  to="/detail"
                  className="underline my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  View My History
                </Link>
              </div>
              <div className="w-full pt-4">
                <div className="border-t border-gray-300">
                  <div className="w-full flex items-center justify-between pt-1">
                    <div className="flex items-center pt-4">
                      <img
                        alt="profile-pic"
                        src={Touxiang}
                        tabIndex={0}
                        className="focus:outline-none  w-8 h-8 rounded-md"
                      />
                      <a>
                        <p
                          tabIndex={0}
                          className="focus:outline-none text-gray-800 text-base leading-4 ml-2"
                        >
                          关于作者
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
