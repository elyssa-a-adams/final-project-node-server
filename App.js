import cors from "cors";
import mongoose from 'mongoose';
import PostRoutes from './Posts/routes.js';
import express from "express"
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Snapper");
PostRoutes(app);
app.listen(process.env.PORT || 4000);
