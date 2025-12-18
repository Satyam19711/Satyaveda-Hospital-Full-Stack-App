import React, { useContext, useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const profileRef = useRef(null);

  const logout = () => {
    navigate("/");
    setToken(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-38 cursor-pointer md:w-28 lg:w-38"
        src={assets.logo}
        alt="logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 md:text-[12px] lg:text-sm">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#FF9933] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 md:text-[12px] lg:text-sm">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-[#FF9933] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 md:text-[12px] lg:text-sm">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#FF9933] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 md:text-[12px] lg:text-sm">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#FF9933] w-3/5 m-auto hidden" />
        </NavLink>

        <a
          href="https://satyam1919-admin-doctor-satyaveda-hospital-full-stack-app.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black text-[#ff9933] cursor-pointer py-1 md:text-[12px] lg:text-sm underline"
        >
          Admin/Doctor App
        </a>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div
            ref={profileRef}
            className="flex items-center gap-2 cursor-pointer group relative"
            onClick={() => setOpenProfileMenu(!openProfileMenu)}
          >
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${
                openProfileMenu ? "block" : "hidden"
              }`}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>

                <a
                  href="https://satyam1919-admin-doctor-satyaveda-hospital-full-stack-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black text-[#ff9933] cursor-pointer"
                >
                  Doctor App
                </a>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#FF9933]  text-white md:px-3 md:py-2 lg:px-8 lg:py-3 px-3 py-2  rounded-full font-light cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(255,153,51,0.7)] md:text-[12px] lg:text-sm"
          >
            Create account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block"> ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block"> ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
            <a
              href="https://satyam1919-admin-doctor-satyaveda-hospital-full-stack-app.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black text-[#ff9933] cursor-pointer px-4 py-2 rounded inline-block underline"
            >
              Admin/Doctor App
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
