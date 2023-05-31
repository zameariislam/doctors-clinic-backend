import mongoose, { Schema } from "mongoose";
import { IAppoinmentsOptions } from "./appoinmentOptions.interface";

const appoinmentOptionsSchema = new Schema<IAppoinmentsOptions>({
  name: { type: String, required: true },
  slots: [String],
});

export const AppoinmentOption = mongoose.model(
  "AppoinmentOption",
  appoinmentOptionsSchema
);
