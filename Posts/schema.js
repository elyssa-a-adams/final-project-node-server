import e from "express";
import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    id: { type: String, required: true},
    username: { type: String, required: true},
    image: String,
    imageData: Buffer,
    caption: String,
    location: String,
    comments: [],
  },
  { collection: "posts" });
export default postSchema;