import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/user.model.js";

dotenv.config();

const makeInstructor = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    // Change this email to your registered email
    const email = "YOUR_EMAIL@example.com";

    const user = await User.findOneAndUpdate(
      { email },
      { role: "instructor" },
      { new: true }
    );

    if (user) {
      console.log(`✅ User "${user.name}" is now an instructor!`);
    } else {
      console.log("❌ User not found with that email");
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
};

makeInstructor();
