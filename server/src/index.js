import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js";
import { ProductRouter } from "./routes/ProductRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", ProductRouter);

mongoose
  .connect(
    "mongodb+srv://groceryadmin:groceryadmin123@grocery-cluster.uwe15mr.mongodb.net/grocery-cluster?retryWrites=true&w=majority&appName=grocery-cluster"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3002, () => console.log("Server Started"));
  })
  .catch((err) => {
    console.log("error to connect");
  });

app.get("/", (req, res) => {
  res.json({
    name: "rupesh",
  });
});
