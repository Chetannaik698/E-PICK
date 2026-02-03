import 'dotenv/config'

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080");
  connectDB();
});
