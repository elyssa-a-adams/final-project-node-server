import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    profilePic: String,
    followers: { type: Array, default: [] },
    following: { type: Array, default: [] },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",},
  },
  { collection: "users" });
export default userSchema;