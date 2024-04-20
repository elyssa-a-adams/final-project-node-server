import cors from "cors";
import mongoose from 'mongoose';
import PostRoutes from './Posts/routes.js';
import express from "express"
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://snapper:bonaire@cluster0.zxeedro.mongodb.net/Snapper?retryWrites=true&w=majority&appName=Cluster0");
PostRoutes(app);
app.listen(4000);
