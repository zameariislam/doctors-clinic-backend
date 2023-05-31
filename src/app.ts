import express, { Application, Request, Response } from "express";
import cors from "cors";
import appoinmentOptionsRouter from './app/modules/appoinments/appoinments.route'


const app: Application = express();

app.use(cors());

// parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/appoinment",appoinmentOptionsRouter)




export default app;
