const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true, 
  },
  fatherName: {
    type: String,
    require: true,
  },
  motherName: {
    type: String,
    require: true,
  },
  presentAddress: {
    type: String,
    require: true,
  },
  permanentAddress: {
    type: String,
    require: true,
  },
  nid: {
    type: Number,
    require: true,
  },
  occupation: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
  nationality: {
    type: String,
    require: true,
  },
  bloodGroup: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  guardiansPhone: {
    type: String,
    require: true,
  },
  relationshipWithGuardian: {
    type: String,
    require: true,
  },
  sscSchool: {
    type: String,
    
  },
  sscBoard: {
    type: String,
    
  },
  sscYear: {
    type: Number,
    
  },
  sscGpa: {
    type: Number,
    
  },
  hscSchool: {
    type: String,
    
  },
  hscBoard: {
    type: String,
    
  },
  hscYear: {
    type: Number,
    
  },
  hscGpa: {
    type: Number,
    
  },
  graduationUniversity: {
    type: String,
  },
  graduationBoard: {
    type: String,
  },
  graduationYear: {
    type: String,
  },
  graduationGpa: {
    type: String,
  },
  postGraduationUniversity: {
    type: String,
  },
  postGraduationBoard: {
    type: String,
  },
  postGraduationYear: {
    type: String,
  },
  postGraduationGpa: {
    type: String,
  },
  referenceName: {
    type: String,
  },
  referencePhone: {
    type: String,
  },
  referenceBatch: {
    type: String,
  },
  referenceRoll: {
    type: String,
  },
  relationWithReference: {
    type: String,
  },
  nameOfCourse: {
    type: String,
  },
  duration: {
    type: String,
  },
  result: {
    type: String,
  },
  passingYear: {
    type: Number,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);
