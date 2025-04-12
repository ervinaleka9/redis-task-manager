const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/tasks', routes);

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));

module.exports = app; // for testing