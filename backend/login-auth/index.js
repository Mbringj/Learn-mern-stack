const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const db = require('./models');
const CONFIG = require('./config/db.config.js');

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let corsOrigin = {
  origin: process.env.CORS_ORGIN,
}

app.use(cors(corsOrigin));

const Role = db.role;

db.mongoose.connect(`mongodb://${CONFIG.HOST}:${CONFIG.PORT}/${CONFIG.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connect to MongoDB.");
  initial();
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});

app.get('/', (req, res) => {
  res.send({ message: "Welcome to bezkoder application." });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});