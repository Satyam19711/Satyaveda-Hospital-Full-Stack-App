import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
const AllAppointments = () => {
  const {
    aToken,
    appointments,
    setAppointments,
    getAllAppointments,
    cancelAppointment,
  } = useContext(AdminContext);
  const { calculateAge, slotDateFormate, currency } = useContext(AppContext);
  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium text-[#ff9933]">
        All Appointments
      </p>
      <div className="bg-white border rounder text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="grid sm:grid grid-cols-[0.4fr_1fr_1fr_1fr_1fr]  sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b text-orange-600">
          <p>#</p>
          <p>Patient</p>
          <p className="hidden sm:block">Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p className="hidden sm:block">Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="grid sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-cols-[0.4fr_1fr_1fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-orange-100 "
            key={index}
          >
            <p>{appointments.length - index}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full hidden sm:block"
                src={item.userData.image}
                alt=""
              />
              <p>{item.userData.name}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormate(item.slotDate)}, {item.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full hidden sm:block bg-[#ff9933]"
                src={item.docData.image}
                alt=""
              />
              <p>{item.docData.name}</p>
            </div>
            <p className="hidden sm:block">
              {currency} {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.isComplete ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AllAppointments;
