const { v4: uuidv4 } = require("uuid");

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
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createStudent = async (req, res) => {
  const StudentInfo =  req.body;
  console.log(StudentInfo);
  try {
    const newStudent = new Student({
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
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
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
  createStudent,
  updateStudent,
  deleteStudent,
};
