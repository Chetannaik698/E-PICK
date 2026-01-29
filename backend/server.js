import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { connectDB } from "./src/db/db.js";

app.listen(8080, () => {
  console.log("Server is running on port 8080");
  connectDB();
});
