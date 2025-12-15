import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            SatyaVeda Hospital is committed to providing trusted, compassionate,
            and accessible healthcare for every family. With skilled doctors and
            a patient-first approach, we ensure quality treatment, modern care,
            and a comfortable experience. Your health and well-being will always
            be our top priority.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact use</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 - 9999999999</li>
            <li>satyaveda@zohomail.in</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ Satyaveda Hospital - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
