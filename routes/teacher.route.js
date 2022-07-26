const express = require("express");
const router = express.Router();

const {
  getAllTeachers,
  createTeacher,
  getOneTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../controllers/teacher.controller");

router.get("/", getAllTeachers);
router.get("/:id", getOneTeacher);
router.delete("/:id", deleteTeacher);
router.patch("/:id", updateTeacher);
router.post("/", createTeacher);

module.exports = router;
