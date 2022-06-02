import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParse.json());
app.use(cors());

app.use("/", userRoutes);
app.get("/", (req, res) => {
  res.send("hello form server");
});
app.listen(port);
