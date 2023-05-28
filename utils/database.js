import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }

  //   if we are not connected then open a try and catch block
  try {
    //try to established the connection
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_propmt",
      bufferCommands: false, // Disable default timeout behavior
      connectTimeoutMS: 30000, // Set custom timeout value (30 seconds)
    });
    //execute correctly
    isConnected = true;
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
