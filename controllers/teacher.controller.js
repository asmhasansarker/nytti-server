const { v4: uuidv4 } = require("uuid");

const Teacher = require("../models/teacher.model");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ id: req.params.id });
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTeacher = async (req, res) => {
  const TeacherInfo = req.body;
  console.log(TeacherInfo);
  try {
    const newTeacher = new Teacher({
      ...TeacherInfo,
    });
    await newTeacher.save();
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ id: req.params.id });
    teacher.name = req.body.name
    teacher.age = Number(req.body.age);
    await teacher.save();
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    await Teacher.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "teacher is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
