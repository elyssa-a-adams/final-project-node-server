import express from "express";
import cors from "cors";
import UserRoutes from "./Users/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
import PostRoutes from "./Posts/routes.js";
import SearchRoutes from "./Search/routes.js";
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
mongoose.connect("mongodb+srv://snapper:bonaire@cluster0.zxeedro.mongodb.net/Snapper?retryWrites=true&w=majority&appName=Cluster0");
PostRoutes(app);
UserRoutes(app);
SearchRoutes(app);
app.listen(process.env.PORT || 4000);
