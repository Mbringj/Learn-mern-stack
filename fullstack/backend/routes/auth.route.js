const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if(!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if(!validPassword) return res.status(400).json({message: "Invalid username or password"});

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.SECRET_KEY
  );

  res.status(200).json({ token });
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if(existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);

    console.log(salt ? 'true':'false');

    const hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword);

    const user = new User({
      username,
      password: hashedPassword
    });

    const savedUser = await user.save();

    res.json({
      message: "User created successfully",
      user: savedUser._id,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;