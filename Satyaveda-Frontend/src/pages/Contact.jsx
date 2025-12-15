import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[400px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center item-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Near Prime Minister House, Lok <br />
            Kalyan Marg, New Delhi, 110011.
          </p>
          <p className="text-gray-500">
            Tel: +91 - 9999999999 <br /> Email: satyaveda@zohomail.in
          </p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT SATYAVEDA HOSPITAL
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm  hover:shadow-[0_0_15px_3px_rgba(255,153,51,0.7)] hover:bg-[#FF9933] transition-all duration-500 rounded cursor-pointer">
            Explore jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
