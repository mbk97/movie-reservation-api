import express, { Express } from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db";

dotenv.config();

dbConnect
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Unable to connect to the database:", err));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dbConnect.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
});
