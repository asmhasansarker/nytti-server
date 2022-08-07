const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  createStudent,
  getOneStudent,
  getOneStudentResult,
  deleteStudent,
  updateStudent,
} = require("../controllers/student.controller");

router.get("/", getAllStudents);
router.get("/:id", getOneStudent);
router.get("/result/:id", getOneStudentResult);
router.delete("/:id", deleteStudent);
router.patch("/:id", updateStudent);
router.post("/", createStudent);

module.exports = router;
