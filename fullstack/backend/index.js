// index.js

const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.route');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());

// app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    console.error('Error connecting to MongoDB', error);
  });

app.use('/auth', authRouter);  


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
