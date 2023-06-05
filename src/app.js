const express = require("express");
const app = express();

const mainRouter = require("./routers/mainRoute");
const productsRouter = require("./routers/productsRoute");
const userRouter = require("./routers/userRoute");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", mainRouter);
app.use("/", productsRouter);
app.use("/", userRouter);

app.listen(3000, () => {
  console.log("server running in the 3000 port");
});
