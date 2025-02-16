
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import captainRoutes from "./routes/captain.route.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import connectToDb from "./db/db.js";

app.use(cors());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use('/captains', captainRoutes);
// app.use('/maps', mapsRoutes);
// app.use('/rides', rideRoutes);

export default app;
