// const { body, validationResult} = require('express-validator');

const Pool = require('pg').Pool;


const pool = new Pool({
  user: 'sammy',
  host: 'localhost',
  database: 'api',
  password: 'mjbring123',
  port: 5432
});

const getUsers = (req, res, next) => {

  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if ( error ) {
      throw error
    }
    res.status(200).json(results.rows);
  });

  const error = new Error("Something went wrong");
  next(error);
};

const getUserById = (req, res) => {

  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
};

const createUser = ( req, res) => {
  const { name, email } = req.body;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(201).send(`User added with id: ${results.rows[0]}`);
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email} = req.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with id: ${id}`)
    }
  );
}

const deleteUser = (req, res) => {
  const id  = parseInt(req.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    } 

    res.status(200).send(`user deleted with id: ${id}`);
  });
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser};