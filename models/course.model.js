const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
  courseFee: {
    type: String,
    require: true,
  },
  totalClass: {
    type: String,
    require: true,
  },
  courseDuration: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
