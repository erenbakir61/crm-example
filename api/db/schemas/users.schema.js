const mongoose = require("mongoose");
// Kaydı oluşturulacak kullanıcıların temel şeması
const usersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  creatingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", usersSchema);
