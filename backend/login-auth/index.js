import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { uid } from 'uid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

let corsOrigin = {
  origin: process.env.CORS_ORGIN,
}

app.use(cors(corsOrigin));


const JWT_SECRET = process.env.JWT_SECRET;

const users = [
  {
    id: uid(32),
    username: 'admin1',
    password: 'admin1', 
  },
  {
    id: uid(32),
    username: 'admin1',
    password: 'admin1', 
  },
];

const generateToken = (userId) => {
  return jwt.sign({ userId}, JWT_SECRET, { expiresIn: '30d'});
}

const hashedPassword = await bcrypt.hash('admin1', 10);
console.log('try to hash password');
console.log(hashedPassword);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);

  if(!user) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }

  const token = generateToken(user.id);

  res.json({
    message: 'Login successful',
    result: {
      id:user.id,
      name: user.username,
    },
    token
  });
});

app.get('/protected',(req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if(!token) {
    return res.status(401).json({
      message: 'Token is required',
    })
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err) {
      return res.status(401).json({
        message: 'Invalid token',
      });
    }
  })

  res.json({
    message: 'Welcome to protected route',
  });

});

console.log(users);

app.get('/', (req, res) => {
  res.send({ message: "Welcome to bezkoder application." });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});