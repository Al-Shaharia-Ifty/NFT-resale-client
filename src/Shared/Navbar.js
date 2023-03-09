import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import "../Css/Navbar.css";
import auth from "../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0
        ? setStickyClass("fixed top-0 left-0 bg-[#13102F]")
        : setStickyClass("relative bg-transparent pt-8");
    }
  };
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div
        className={`hidden mb-[-105px] lg:flex p-4 text-white ${stickyClass} z-40 w-full duration-500`}
      >
        <div className="flex-auto flex items-center gap-4">
          <Link to={"/home"}>
            <h1 className="text-3xl font-semibold hover:text-white duration-200">
              CryptoArt
            </h1>
          </Link>
          <NavLink
            to={"/home"}
            className={({ isActive }) =>
              isActive
                ? "nav text-purple-600 hover:text-purple-600 duration-300"
                : "nav hover:text-purple-600 duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "nav text-purple-600 hover:text-purple-600 duration-300"
                : "nav hover:text-purple-600 duration-300"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "nav text-purple-600 hover:text-purple-600 duration-300"
                : "nav hover:text-purple-600 duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
              isActive
                ? "nav text-purple-600 hover:text-purple-600 duration-300"
                : "nav hover:text-purple-600 duration-300"
            }
          >
            Blogs
          </NavLink>
        </div>
        <div>
          {!user ? (
            <div className="flex flex-auto justify-end items-center gap-4">
              <NavLink
                to={"/login"}
                className={({ isActive }) =>
                  isActive
                    ? "nav text-purple-600 hover:text-purple-600 duration-300"
                    : "nav hover:text-purple-600 duration-300"
                }
              >
                Log In
              </NavLink>
              <NavLink
                to={"/signUp"}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 hover:bg-purple-600 btn btn-outline"
                    : "bg-purple-600 hover:text-purple-600 btn btn-outline text-white border-0"
                }
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div
              onClick={() => {
                signOut(auth);
              }}
              className="hover:text-red-500 duration-300 btn btn-outline btn-error"
            >
              Sign Out
            </div>
          )}
        </div>
      </div>
      <div
        className={`lg:hidden mb-[-105px] p-4 flex justify-between items-center text-white ${stickyClass} z-40 w-full duration-500`}
      >
        <Link to={"/home"}>
          <h1 className="text-3xl font-semibold hover:text-white duration-200">
            CryptoArt
          </h1>
        </Link>
        <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1 text-2xl">
              <i className="fa-solid fa-bars"></i>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#17171A] rounded-box w-52 gap-3"
            >
              <li>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-purple-600 btn btn-ghost"
                      : "nav hover:text-purple-600 duration-300 btn btn-ghost"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-purple-600 btn btn-ghost"
                      : "nav hover:text-purple-600 duration-300 btn btn-ghost"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-purple-600 btn btn-ghost"
                      : "nav hover:text-purple-600 btn btn-ghost duration-300"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blogs"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-purple-600 btn btn-ghost"
                      : "nav hover:text-purple-600 btn btn-ghost duration-300"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              {!user ? (
                <>
                  <li>
                    <NavLink
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "nav text-purple-600 btn btn-ghost"
                          : "nav hover:text-purple-600 btn btn-ghost duration-300"
                      }
                    >
                      LogIn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/signUp"}
                      className={({ isActive }) =>
                        isActive
                          ? "nav text-purple-600 btn btn-ghost"
                          : "nav hover:text-purple-600 btn btn-ghost duration-300"
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <div
                    onClick={() => {
                      signOut(auth);
                    }}
                    className="hover:text-red-500 duration-300 btn btn-outline btn-error"
                  >
                    Sign Out
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
