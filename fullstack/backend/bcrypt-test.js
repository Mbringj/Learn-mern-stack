const bcrypt = require('bcrypt');

const saltRounds = 10;

const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const users = [
  {username: 'admin', password: bcrypt.hashSync('password', saltRounds)},
  {username: 'user', password: 'user'},
]

const password = 'password';
const secretkeyhashed = 'hashedpassword';

const passwordHash = bcrypt.hashSync(password, saltRounds);
    

console.log(passwordHash);
console.log(bcrypt.getRounds(passwordHash));
console.log(bcrypt.compareSync(password,users[0].password));
