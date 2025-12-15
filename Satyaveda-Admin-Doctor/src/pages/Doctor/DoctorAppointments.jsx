import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    getAppointments,
    dToken,
    appointments,
    setAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);

  const { calculateAge, slotDateFormate, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);
  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium text-[#ff9933]">
        Doctor Appointments
      </p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        <div className="grid sm:grid grid-cols-[0.4fr_1fr_1fr_1fr_1fr]  sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b text-orange-600">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p className="hidden sm:block">Age</p>
          <p>Date & Time</p>
          <p className="hidden sm:block">Fees</p>
          <p>Action</p>
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
            <div>
              <p className="text-xs inline border border-[#ff9933] px-2 rounded-full">
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p className="hidden sm:block">{calculateAge(item.userData.dob)}</p>
            <p>
              {slotDateFormate(item.slotDate)}, {item.slotTime}
            </p>

            <p className="hidden sm:block">
              {currency} {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-medium ">Cancelled</p>
            ) : item.isComplete ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex">
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.cancel_icon}
                  alt=""
                />
                <img
                  onClick={() => completeAppointment(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.tick_icon}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
