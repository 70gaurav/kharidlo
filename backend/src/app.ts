import express from "express";

//route imports
import userRoutes from "./routes/user.js";
const port = 3000;
const app = express();

app.use("/api/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
