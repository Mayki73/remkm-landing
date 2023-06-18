const express = require("express");
const cors = require("cors");
const requestRouter = require("./routes/request.routes");
require("dotenv").config();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(requestRouter);

app.listen(3001, () => {
  console.log("Server start on port " + 3001);
});
