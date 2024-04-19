import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import PostRoutes from "./Posts/routes.js";
mongoose.connect("mongodb://localhost:27017/snapper");
const app = express();
app.use(express.json());
PostRoutes(app);
app.listen(process.env.PORT || 4000);