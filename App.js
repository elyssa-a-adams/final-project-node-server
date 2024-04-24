import express from "express";
import cors from "cors";
import UserRoutes from "./Users/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
import PostRoutes from "./Posts/routes.js";
import SearchRoutes from "./Search/routes.js";
const app = express();
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
app.use(express.json({limit: "50mb"}));
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
mongoose.connect(DB_CONNECTION_STRING);
PostRoutes(app);
UserRoutes(app);
SearchRoutes(app);
app.listen(process.env.PORT || 4000);
