import express, { Request, Response } from "express";
import { AppoinmentOption } from "./appoinments.model";
import appoinmentsController from "./appoinments.controller";

const router = express.Router();

router.get(
  "/appoinment-options",
  appoinmentsController.getAppoinmentOptions
);
router.post('/create-booking', appoinmentsController.makeBooking)

export default router;
