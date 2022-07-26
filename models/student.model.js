const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
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
    require: true,
  },
  sscBoard: {
    type: String,
    require: true,
  },
  sscYear: {
    type: Number,
    require: true,
  },
  sscGpa: {
    type: Number,
    require: true,
  },
  hscSchool: {
    type: String,
    require: true,
  },
  hscBoard: {
    type: String,
    require: true,
  },
  hscYear: {
    type: Number,
    require: true,
  },
  hscGpa: {
    type: Number,
    require: true,
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
  // sscBoard: {
  //   type: String,
  //   require: true,
  // },
  // age: {
  //   type: Number,
  //   require: true,
  // },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", studentSchema);
