const express = require('express');
const bodyParser = require('body-parser');
const { 
  getUsers, 
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./queries');

const helmet = require('helmet');

const cors = require('cors');


const app = express();
const port = 8000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send('hello word');
});

app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(port , () => {
  console.log(`App running on port ${port}`);
});