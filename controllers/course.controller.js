const { v4: uuidv4 } = require("uuid");

const Course = require("../models/course.model");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCourse = async (req, res) => {
  const CourseInfo = req.body;
  console.log(CourseInfo);
  try {
    const newCourse = new Course({
      ...CourseInfo,
    });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });
    course.name = req.body.name
    course.age = Number(req.body.age);
    await course.save();
    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Course is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
