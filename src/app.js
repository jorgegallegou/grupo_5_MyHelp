const path = require("path");
const express = require("express");
const app = express();
const mainRouter = require("./routers/mainRoute");
const productsRouter = require("./routers/productsRoute");
const userRouter = require("./routers/userRoute");
const methodOverride = require("method-override");
const session = require ('express-session');
const userLoggedMiddleare = require ('./middlewares/userLoggedMiddleware');

app.use(userLoggedMiddleare);

app.use(express.static("public"));

app.use(session({
  secret: "Shhh, It's a secret ",
  resave: false,
  saveUninitialized: false,
}))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.listen(3005, () => {
  console.log("server running in the 3005 port");
});

app.use("/", mainRouter);
app.use("/", productsRouter);
app.use("/user", userRouter);
