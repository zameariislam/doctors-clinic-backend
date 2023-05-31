import { IBooking } from "./appoinments.interface";
import { AppoinmentOption, Booking } from "./appoinments.model";

const getAppoinmentOptionsService = async () => {
  const appoinmentOptions = await AppoinmentOption.find({});

  if (!appoinmentOptions) {
    throw new Error("Appoinment not Found !!");
  }

  return appoinmentOptions;
};

const makeBookingService = async (data:IBooking):Promise<IBooking|null> => {
  const booking = await Booking.create(data);

  if (!booking) {
    throw new Error("Can not make booking !!");
  }

  return booking;
};

export default {
  getAppoinmentOptionsService,
  makeBookingService
};
