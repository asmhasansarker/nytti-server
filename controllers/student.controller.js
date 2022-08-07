const shortid = require("shortid");

const Student = require("../models/student.model");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneStudent = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneStudentResult = async (req, res) => {
  try {
    const student = await Student.findOne({ id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createStudent = async (req, res) => {
  const StudentInfo = req.body;
  console.log(StudentInfo);
  try {
    const newStudent = new Student({
      id: shortid.generate(),
      ...StudentInfo,
    });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    student.result = req.body.result;
    student.nameOfCourse = req.body.nameOfCourse;
    student.duration = req.body.duration;
    student.passingYear = Number(req.body.passingYear);
    await student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "student is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  getOneStudentResult,
  createStudent,
  updateStudent,
  deleteStudent,
};
