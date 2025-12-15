import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer
     ${isActive ? "bg-orange-100 border-r-4 border-[#ff9933]" : ""}`;

  return (
    <div className="min-h-screen shadow-xl bg-white">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink to="/admin-dashboard" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.home_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Dashboard</p>
          </NavLink>

          <NavLink to="/all-appointments" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.appointment_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Appointments</p>
          </NavLink>

          <NavLink to="/add-doctor" className={navStyle}>
            <img className="md:w-6 w-4 shrink-0" src={assets.add_icon} alt="" />
            <p className="md:text-xl text-sm sm:block hidden">Add Doctor</p>
          </NavLink>

          <NavLink to="/doctor-list" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.people_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Doctor List</p>
          </NavLink>
          <a
            href="https://satyam1919-user-satyaveda-hospital-full-stack-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-orange-50"
          >
            <span className="text-lg md:text-xl">🏠</span>
            <p className="md:text-xl text-sm sm:block hidden">Main App</p>
          </a>
        </ul>
      )}
      {/* Doctor  */}
      {dToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink to="/doctor-dashboard" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.home_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Dashboard</p>
          </NavLink>

          <NavLink to="/doctor-appointments" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.appointment_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Appointments</p>
          </NavLink>

          <NavLink to="/doctor-profile" className={navStyle}>
            <img
              className="md:w-6 w-4 shrink-0"
              src={assets.people_icon}
              alt=""
            />
            <p className="md:text-xl text-sm sm:block hidden">Profile</p>
          </NavLink>

          <a
            href="https://satyam1919-user-satyaveda-hospital-full-stack-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-orange-50"
          >
            <span className="text-lg md:text-xl">🏠</span>
            <p className="md:text-xl text-sm sm:block hidden">Main App</p>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
