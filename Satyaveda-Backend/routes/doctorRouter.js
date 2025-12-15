const express = require("express");
const {
  doctorList,
  loginDoctor,
  appointmentsDoctor,
  appointmentsCancel,
  appointmentsCompleted,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
} = require("../controllers/doctorController");
const authDoctor = require("../middlewares/authDoctor");

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, appointmentsDoctor);
doctorRouter.post("/complete-appointment", authDoctor, appointmentsCompleted);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentsCancel);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

module.exports = doctorRouter;
