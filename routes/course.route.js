const express = require("express");
const router = express.Router();

const {
  getAllCourses,
  createCourse,
  getOneCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/course.controller");

router.get("/", getAllCourses);
router.get("/:id", getOneCourse);
router.delete("/:id", deleteCourse);
router.patch("/:id", updateCourse);
router.post("/", createCourse);

module.exports = router;
