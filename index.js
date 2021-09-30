const express = require("express");
const postRoute = require("./routes/post.route");

const app = express();
const port = 3001;

// parse req body to json format:
app.use(express.json());

// post middleware
app.use("/post", postRoute
);

// user middleware
app.use("/users", (req, res, next) => {
  console.log("i am users miidleware ...");
  next();
});

// common middleware
app.use((req, res, next) => {
  console.log("i am common miidleware ...");
  next();
});

// listener
app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
