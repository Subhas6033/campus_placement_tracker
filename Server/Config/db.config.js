import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log(`Successfully Connected to the DB!!`);
  } catch (error) {
    console.log(`Err While connecting to the DB!!! ${error}`);
    process.exit(1);
  }
};
