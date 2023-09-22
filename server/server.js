const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const db = require('./models');

app.get('/api', async (req, res) => {
  const query = await db.query(
    `SELECT * FROM tickets`
  );

  res.status(200).json(query.rows)
});

app.post('/api', (req, res) => {
  res.send('post');
});

app.patch('/api', (req, res) => {
  res.send('patch');
});

const PORT = parseInt(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
