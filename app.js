const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileUpload")
require("./config/db");

const userRouter = require("./routes/user.route");
const studentRouter = require("./routes/student.route")
const teacherRouter = require("./routes/teacher.route")

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload())
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);
app.use("/api/teachers", teacherRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

// app.post("/students",(req, res) => {
//   console.log("newStudent :", req.body)
//   res.status(200).send("new student route", req.body)
// })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
