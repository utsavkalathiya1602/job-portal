import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://jobportalmain:jobportalmain@cluster0.oz6myvf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log(error);
    console.log("❎ Database connection failed");
  }
};

export default connectDB;
