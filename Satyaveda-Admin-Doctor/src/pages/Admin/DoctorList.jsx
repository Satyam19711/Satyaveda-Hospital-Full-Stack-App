import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import GlobalLoader from "../../components/GlobalLoader";

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability, loading } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  if (loading) {
    return <GlobalLoader />;
  }
  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium text-[#ff9933]">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
          >
            <img
              className="bg-[#ff9933] group-hover:shadow-[0_0_15px_3px_rgba(255,153,51,0.7)] transition-all duration-300 hover:scale-105"
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <p className="text-neutral-800 text-sm">{item.name}</p>
              <p className="text-zinc-600 text-sm">{item.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
