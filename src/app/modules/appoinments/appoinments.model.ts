import mongoose, { Schema } from "mongoose";
import { IAppoinmentsOptions, IBooking } from "./appoinments.interface";

const appoinmentOptionsSchema = new Schema<IAppoinmentsOptions>({
  name: { type: String, required: true },
  slots: [String],
});

export const AppoinmentOption = mongoose.model(
  "AppoinmentOption",
  appoinmentOptionsSchema
);

const bookingSchema = new Schema<IBooking>({
  patientName: { type: String, required: true },
  treatment: { type: String, required: true },
  appoinmentDate: { type: String, required: true },
  slot: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export const Booking = mongoose.model("Booking", bookingSchema);
