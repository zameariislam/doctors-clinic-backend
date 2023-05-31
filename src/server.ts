import mongoose from "mongoose";
import app from "./app";
import configure from "./configure";

async function bootStrap() {
  await mongoose.connect(configure.database_url as string);
  console.log("Database is running");

  app.listen(configure.port, () => {
    console.log(`App listening on port ${configure.port}`);
  });
}

bootStrap();
