const mongoose = require("mongoose");

const Role = new mongoose.Schema(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

modules.exports = Role;