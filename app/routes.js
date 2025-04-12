const express = require('express');
const router = express.Router();
const client = require('./redisClient');
const { v4: uuidv4 } = require('uuid');

// CREATE
router.post('/', async (req, res) => {
  const id = uuidv4();
  const { title, deadline } = req.body;
  await client.hSet(`task:${id}`, { id, title, deadline, status: 'pending' });
  res.status(201).send({ message: 'Task created', id });
});

// READ
router.get('/:id', async (req, res) => {
  const task = await client.hGetAll(`task:${req.params.id}`);
  if (!task || !task.id) return res.status(404).send({ error: 'Not found' });
  res.send(task);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updates = req.body;
  await client.hSet(`task:${req.params.id}`, updates);
  res.send({ message: 'Task updated' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  await client.del(`task:${req.params.id}`);
  res.send({ message: 'Task deleted' });
});

module.exports = router;