import mongoose from "mongoose";

const { MONGODB_URI = "" } = process.env;

export default async function connectDB() {
  console.log(mongoose.connections[0]);

  try {
    await mongoose.connect(MONGODB_URI, { dbName: "HouseHunter" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
