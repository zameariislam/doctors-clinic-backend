export interface IAppoinmentsOptions {
  name: string;
  slots: string[];
}

export interface IBooking {
  patientName: string;
  treatment: string;
  appoinmentDate: string;
  slot: string;
  email: string;
  phone: string;
}
