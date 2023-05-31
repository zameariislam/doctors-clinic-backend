import { Request, Response } from "express";

import appoinmentsService from "./appoinments.service";

const getAppoinmentOptions = async (req: Request, res: Response) => {
  try {
    const result = await appoinmentsService.getAppoinmentOptionsService();

    res.status(200).json({
      success: true,
      message: "Appoinment Options are successfully found !",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: "fail",
      message: "Appoinment Options are  not  found !",
    });
  }
};

const makeBooking = async (req: Request, res: Response) => {

  
  
  const {patientName,treatment,appoinmentDate,slot,email,phone}=req.body
  
  try {
    const result = await appoinmentsService.makeBookingService(req.body);
    res.status(200).json({
      success: "success",
      message: "booking is created !",
      data:result
    });

  } catch (err) {

    res.status(400).json({
      success: "fail",
      message: "booking is not created !",
    });
  }

  
};

export default {
  getAppoinmentOptions,
  makeBooking,
};
