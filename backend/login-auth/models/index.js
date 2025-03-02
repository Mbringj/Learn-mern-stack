const mongoose = require("mongoose");

const User = require("./user.model");
const Role = require("./role.model");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;

db.ROLES = ["user", "admin", "moderator"];
module.exports = db;