const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [];

// CREATE
router.post('/', (req, res) => {
  const user = {
    id: uuidv4(),
    ...req.body
  };
  users.push(user);
  res.status(201).json(user);
});

// READ
router.get('/', (req, res) => {
  res.json(users);
});

// UPDATE
router.put('/:id', (req, res) => {
  const { id } = req.params;

  users = users.map(user =>
    user.id === id ? { ...user, ...req.body } : user
  );

  res.json({ message: 'Atualizado' });
});

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter(user => user.id !== id);

  res.sendStatus(204);
});

module.exports = router;