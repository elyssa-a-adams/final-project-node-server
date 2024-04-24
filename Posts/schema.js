import e from "express";
import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    id: String,
    username: String,
    image: String,
    caption: String,
    location: String,
    comments: [],
  },
  { collection: "posts" });
export default postSchema;